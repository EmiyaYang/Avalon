import Router from 'koa-router'

const router = new Router()

router.get('/articles', (ctx) => {
  ctx.status = 200
  ctx.body = {
    data: {}
  }
})

export default router
