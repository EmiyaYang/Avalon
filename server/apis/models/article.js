import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: 30,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    cover: {
      type: String
    },
    tags: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Tag' }],
    comments: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Comment' }]
  },
  {
    // default: createdAt, updateAt
    timestamps: true,
    collection: 'Article', // 这里是为了避免新建的表会带上 s 后缀
    versionKey: false // 不需要 __v 字段，默认是加上的
  }
)

schema.set('toJSON', { virtuals: true })

export default mongoose.model('Article', schema)
