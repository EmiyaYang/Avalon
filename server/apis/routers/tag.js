import Router from 'koa-router'

const tags = [
  { content: 'Vue', num: 4 },
  { content: 'React', num: 4 },
  { content: 'Angular', num: 324 },
  { content: '数据结构', num: 100 },
  { content: '算法', num: 10 },
  { content: '算法', num: 10 },
  { content: '算法', num: 10 },
  { content: '算法', num: 10 },
  { content: '算法', num: 10 },
  { content: '很长很长很长很长很长', num: 1110 },
  {
    content: '很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    num: 10
  }
]

const router = new Router()

router.get('/tags', (ctx) => {
  ctx.status = 200
  ctx.body = {
    data: {
      tags
    }
  }
})

export default router
