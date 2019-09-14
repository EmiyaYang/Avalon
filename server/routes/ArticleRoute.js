const Router = require('koa-router')
const router = new Router()

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

const articles = [
  {
    year: 2019,
    children: [
      {
        month: 7,
        children: [
          { title: '七月团建', articleId: '233', day: 10 },
          { title: 'Vue', articleId: '233123', day: 1 }
        ]
      },
      {
        month: 10,
        children: [
          { title: '十月团建', articleId: '233', day: 22 },
          { title: '十月团建', articleId: '233432', day: 3 }
        ]
      }
    ]
  },
  {
    year: 2019,
    children: [
      {
        month: 7,
        children: [
          { title: '七月团建', articleId: '233', day: 10 },
          { title: 'Vue', articleId: '233123', day: 1 }
        ]
      },
      {
        month: 10,
        children: [
          { title: '十月团建', articleId: '233', day: 22 },
          { title: '十月团建', articleId: '233432', day: 3 }
        ]
      }
    ]
  },
  {
    year: 2019,
    children: [
      {
        month: 7,
        children: [
          { title: '七月团建', articleId: '233', day: 10 },
          { title: 'Vue', articleId: '233123', day: 1 }
        ]
      },
      {
        month: 10,
        children: [
          { title: '十月团建', articleId: '233', day: 22 },
          { title: '十月团建', articleId: '233432', day: 3 }
        ]
      }
    ]
  },
  {
    year: 2019,
    children: [
      {
        month: 7,
        children: [
          { title: '七月团建', articleId: '233', day: 10 },
          { title: 'Vue', articleId: '233123', day: 1 }
        ]
      },
      {
        month: 10,
        children: [
          { title: '十月团建', articleId: '233', day: 22 },
          { title: '十月团建', articleId: '233432', day: 3 }
        ]
      }
    ]
  },
  {
    year: 2019,
    children: [
      {
        month: 7,
        children: [
          { title: '七月团建', articleId: '233', day: 10 },
          { title: 'Vue', articleId: '233123', day: 1 }
        ]
      },
      {
        month: 10,
        children: [
          { title: '十月团建', articleId: '233', day: 22 },
          { title: '十月团建', articleId: '233432', day: 3 }
        ]
      }
    ]
  }
]

router.get('/test', function(ctx, next) {
  ctx.status = 200
  ctx.body = {
    data: {
      tags,
      articles
    }
  }
})

module.exports = router
