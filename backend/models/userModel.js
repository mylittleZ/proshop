import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    //   createdAt updatedAt field
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

// 在存入数据库之前进行的操作
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  // generate a salt(random string, 10 is the complexities)
  const salt = await bcrypt.genSalt(10)
  // transfer to hash
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema);

export default User;