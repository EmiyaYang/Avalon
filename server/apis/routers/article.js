import Router from 'koa-router'
import { getArticle, getArticleList } from '../controllers/ariticle'

const router = new Router()

router.get('/articles', getArticleList)

router.get('/article/:id', getArticle)

export default router
