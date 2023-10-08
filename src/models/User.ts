import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

// For security reasons, roles are defined as numbers
// 1106 - Admin, 3013 - Director, 1908 - Guide, 8008 - Parent
const USER_ROLES = [1106, 3013, 1908, 8008]

mongoose.Schema.Types.String.set('trim', true)
// should return false for empty strings
mongoose.Schema.Types.String.set('validation', (v: string) => Boolean(v))

const userSchema = new mongoose.Schema<IUser>(
  {
    // The School hash code of the user -- How to handle this field for admins? Should 
    school: {
      type: String,
      required: [true, 'Please provide a school hashcode'],
      minlength: [6, 'School hashcode must be 6 characters in length'],
      maxlength: [6, 'School hashcode must be 6 characters in length'],
    },
    // The Name of the user
    name: {
      first: {
        type: String,
        required: [true, 'Please provide a first name for the user'],
        minlength: [2, 'First name cannot be less than 2 characters'],
        maxlength: [30, 'First name cannot be more than 30 characters'],
      },
      last: {
        type: String,
        required: [true, 'Please provide a last name for the user'],
        minlength: [2, 'Last name cannot be less than 2 characters'],
        maxlength: [30, 'Last name cannot be more than 30 characters'],
      },
    },
    // The Email address of the user
    email: {
      type: String,
      required: [true, 'Please provide an email address for the user'],
      maxlength: [60, 'Email address cannot be more than 60 characters'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a passowrd for the user'],
      maxlength: [60, 'Password cannot be more than 60 characters'],
    },
    role: {
      type: Number,
      required: [true, 'Please provide a role for the user'],
      enum: USER_ROLES,
    },
  },
  {
    timestamps: true,
    // Add virtuals to get users by school code and by role?
    virtuals: {
      fullName: {
        get(this: IUser) {
          return `${this.name.first} ${this.name.last}`
        },
        set(this: IUser, value: string) {
          this.name.first = value.substring(0, value.indexOf(' '))
          this.name.last = value.substring(value.indexOf(' ') + 1)
        },
      },
    },
  }
)

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10)
})

export default mongoose.models.User || mongoose.model('User', userSchema)
