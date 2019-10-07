import articleModel from '../models/article'

export const getArticle = async (ctx) => {
  const { id } = ctx.params

  if (!id) ctx.throw(400)

  const article = await new Promise((resolve) => {
    articleModel.findById(id).exec((err, doc) => {
      if (err) ctx.throw(500, err)
      resolve(doc)
    })
  })

  ctx.status = 200
  ctx.body = {
    data: article
  }
}

export const getArticleList = async (ctx) => {
  // TODO: 按时间轴组织

  const articles = await new Promise((resolve) => {
    articleModel.find().exec((err, docs) => {
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
