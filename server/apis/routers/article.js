import Router from 'koa-router'
import { getArticle, getArticleList } from '../controllers/ariticle'

const router = new Router()

// const articles = [
//   {
//     year: 2019,
//     children: [
//       {
//         month: 7,
//         children: [
//           { title: '七月团建', articleId: '233', day: 10 },
//           { title: 'Vue', articleId: '233123', day: 1 }
//         ]
//       },
//       {
//         month: 10,
//         children: [
//           { title: '十月团建', articleId: '233', day: 22 },
//           { title: '十月团建', articleId: '233432', day: 3 }
//         ]
//       }
//     ]
//   },
//   {
//     year: 2019,
//     children: [
//       {
//         month: 7,
//         children: [
//           { title: '七月团建', articleId: '233', day: 10 },
//           { title: 'Vue', articleId: '233123', day: 1 }
//         ]
//       },
//       {
//         month: 10,
//         children: [
//           { title: '十月团建', articleId: '233', day: 22 },
//           { title: '十月团建', articleId: '233432', day: 3 }
//         ]
//       }
//     ]
//   },
//   {
//     year: 2019,
//     children: [
//       {
//         month: 7,
//         children: [
//           { title: '七月团建', articleId: '233', day: 10 },
//           { title: 'Vue', articleId: '233123', day: 1 }
//         ]
//       },
//       {
//         month: 10,
//         children: [
//           { title: '十月团建', articleId: '233', day: 22 },
//           { title: '十月团建', articleId: '233432', day: 3 }
//         ]
//       }
//     ]
//   },
//   {
//     year: 2019,
//     children: [
//       {
//         month: 7,
//         children: [
//           { title: '七月团建', articleId: '233', day: 10 },
//           { title: 'Vue', articleId: '233123', day: 1 }
//         ]
//       },
//       {
//         month: 10,
//         children: [
//           { title: '十月团建', articleId: '233', day: 22 },
//           { title: '十月团建', articleId: '233432', day: 3 }
//         ]
//       }
//     ]
//   },
//   {
//     year: 2019,
//     children: [
//       {
//         month: 7,
//         children: [
//           { title: '七月团建', articleId: '233', day: 10 },
//           { title: 'Vue', articleId: '233123', day: 1 }
//         ]
//       },
//       {
//         month: 10,
//         children: [
//           { title: '十月团建', articleId: '233', day: 22 },
//           { title: '十月团建', articleId: '233432', day: 3 }
//         ]
//       }
//     ]
//   }
// ]

router.get('/articles', getArticleList)

router.get('/article/:id', getArticle)

export default router
