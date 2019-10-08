import Router from 'koa-router'

import { getTagList } from '../controllers/tag'

const router = new Router()

router.get('/tags', getTagList)

export default router
