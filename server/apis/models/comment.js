import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      maxlength: 500
    }
  },
  {
    // timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Comment', // 这里是为了避免新建的表会带上 s 后缀
    versionKey: false // 不需要 __v 字段，默认是加上的
  }
)

export default mongoose.model('Comment', schema)
