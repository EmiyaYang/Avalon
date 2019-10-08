import tagModel from '../models/tag'

export const getTagList = async (ctx) => {
  const tags = await new Promise((resolve) => {
    tagModel.find().exec((err, docs) => {
      if (err) ctx.throw(500, err)
      resolve(docs)
    })
  })

  ctx.status = 200
  ctx.body = {
    data: {
      tags
    }
  }
}
