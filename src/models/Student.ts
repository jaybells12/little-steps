import mongoose from 'mongoose'

mongoose.Schema.Types.String.set('trim', true)
// should return false for empty strings
mongoose.Schema.Types.String.set('validation', (v: string) => Boolean(v))

// Current Fields returned by populate: Name, Details, Parents, Classroom
// Fields not returned by populate: School

const studentSchema = new mongoose.Schema<IStudent>(
  {
    // The School hashcode of the student
    school: {
      type: String,
      required: [true, 'Please provide a hashcode for the school'],
      minlength: [6, 'School hashcodes must be 6 characters in length'],
      maxlength: [6, 'School hashcodes must be 6 characters in length'],
      // Select false prevents this field from being returned on query unless specified
      select: false,
    },
    // The full Name of the student
    name: {
      first: {
        type: String,
        required: [true, 'Please provide a first name for the student'],
        minlength: [2, 'First name cannot be less than 2 characters'],
        maxlength: [30, 'First name cannot be more than 30 characters'],
      },
      last: {
        type: String,
        required: [true, 'Please provide a last name for the student'],
        minlength: [2, 'Last name cannot be less than 2 characters'],
        maxlength: [30, 'Last name cannot be more than 30 characters'],
      },
    },
    // The personal Details of the student
    details: {
      // The Birthday of the student
      birthday: {
        type: Date,
        required: [true, 'Please provide a birthday for the student'],
      },
      // The Address of the the student
      address: {
        street: {
          type: String,
          required: [true, 'Please provide a street for the student address'],
        },
        city: {
          type: String,
          required: [true, 'Please provide a city for the student address'],
        },
        state: {
          type: String,
          required: [true, 'Please provide a state for the student address'],
        },
        zipcode: {
          type: Number,
          required: [true, 'Please provide a zipcode for the student address'],
        },
      },
      // The Parent(s) of the students
      parents: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Parent',
          //Need to verify this populate options settings
          // populate: {
          //   select: ['name -_id'],
          // },
          required: [true, 'Please provide at least one parent of the student'],
        },
      ],
    },
    // The Classroom of the student
    classroom: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classroom',
      },
    ],
    // The Lessons of the student
  },
  {
    timestamps: true,
    virtuals: {
      fullName: {
        get(this: IStudent) {
          return `${this.name.first} ${this.name.last}`
        },
        set(this: IStudent, value: string) {
          this.name.first = value.substring(0, value.indexOf(' '))
          this.name.last = value.substring(value.indexOf(' ') + 1)
        },
      },
    },
  }
)

export default mongoose.models.Student || mongoose.model('Student', studentSchema)
