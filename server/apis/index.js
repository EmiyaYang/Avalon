import Router from 'koa-router'

import routers from './routers'

const router = new Router()

Object.keys(routers).forEach((key) => {
  const value = routers[key]

  router.use('/api', value.routes(), value.allowedMethods())
})

export default router
