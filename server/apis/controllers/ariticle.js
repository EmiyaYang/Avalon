import mongoose from 'mongoose'
import articleModel from '../models/article'
import tagModel from '../models/tag'

export const getArticle = async (ctx) => {
  const { id } = ctx.params

  if (!mongoose.Types.ObjectId.isValid(id)) ctx.throw(404)

  const article = await new Promise((resolve) => {
    articleModel
      .findById(id)
      .populate('tags', 'id name')
      .exec((err, doc) => {
        if (err) ctx.throw(500, err)
        resolve(doc)
      })
  })

  ctx.status = 200
  ctx.body = {
    data: article
  }
}

/**
 * 支持按标签查询
 */
export const getArticleList = async (ctx) => {
  let { tags } = ctx.query

  tags = (tags && tags.split(',')) || []

  // tag: name --> id
  const tagIdArr = await new Promise((resolve) => {
    tagModel
      .find({
        name: { $in: tags }
      })
      .exec((err, docs) => {
        if (err) ctx.throw(500, err)

        resolve(docs.map((item) => item.id))
      })
  })

  // 当数组为空时返回全部数据
  const condition = {}

  if (tagIdArr.length > 0) condition.tags = { $all: tagIdArr }

  const articles = await new Promise((resolve) => {
    articleModel
      .find(condition)
      .populate('tags', 'id name')
      .exec((err, docs) => {
        if (err) ctx.throw(500, err)

        resolve(docs)
      })
  })

  ctx.status = 200
  ctx.body = {
    data: {
      articles
    }
  }
}
