import mongoose from 'mongoose'

mongoose.Schema.Types.String.set('trim', true)
// should return false for empty strings
mongoose.Schema.Types.String.set('validation', (v: string) => Boolean(v))

// Current Fields returned by populate: Name, Email
// Fields not returned by populate: School

const directorSchema = new mongoose.Schema<IDirector>(
  {
    // The school hash code of the director
    school: {
      type: String,
      required: [true, 'Please provide a school hashcode'],
      minlength: [6, 'School hashcode must be 6 characters in length'],
      maxlength: [6, 'School hashcode must be 6 characters in length'],
      // Select false prevents this field from being returned on query unless specified
      select: false,
    },
    // The full name of the director
    name: {
      first: {
        type: String,
        required: [true, 'Please provide a first name for the director'],
        minlength: [2, 'First name cannot be less than 2 characters'],
        maxlength: [30, 'First name cannot be more than 30 characters'],
      },
      last: {
        type: String,
        required: [true, 'Please provide a last name for the director'],
        minlength: [2, 'Last name cannot be less than 2 characters'],
        maxlength: [30, 'Last name cannot be more than 30 characters'],
      },
    },
    // The email address of the director
    email: {
      type: String,
      required: [true, 'Please provide an email address for the director'],
      maxlength: [60, 'Email address cannot be more than 60 characters'],
    },
  },
  {
    timestamps: true,
    virtuals: {
      fullName: {
        get(this: IDirector) {
          return `${this.name.first} ${this.name.last}`
        },
        set(this: IDirector, value: string) {
          this.name.first = value.substring(0, value.indexOf(' '))
          this.name.last = value.substring(value.indexOf(' ') + 1)
        },
      },
    },
  }
)

export default mongoose.models.Director || mongoose.model('Director', directorSchema)
