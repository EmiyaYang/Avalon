import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['admin', 'visitor']
    }
  },
  {
    // timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'User', // 这里是为了避免新建的表会带上 s 后缀
    versionKey: false // 不需要 __v 字段，默认是加上的
  }
)

export default mongoose.model('User', schema)
