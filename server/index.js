/* eslint-disable no-console */
import Koa from 'koa'
import consola from 'consola'
import mongoose from 'mongoose'
import { Nuxt, Builder } from 'nuxt'

import config from '../nuxt.config.js'
import apis from './apis'

const app = new Koa()

// 连接到数据库
mongoose.connect(config.db.uris, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.error('Failed to connect to database')
  } else {
    console.log('Connecting database successfully')
  }
})

app.use(apis.routes()).use(apis.allowedMethods())

// Import and Set Nuxt.js options
config.dev = app.env !== 'production'

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use((ctx, next) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
