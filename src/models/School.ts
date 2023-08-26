import mongoose from 'mongoose'

interface ISchool {
  name: string
  hashcode: string
  employees: {
    directors: [mongoose.Schema.Types.ObjectId]
    guides: [mongoose.Schema.Types.ObjectId]
  }
  clients: {
    students: [mongoose.Schema.Types.ObjectId]
    parents: [mongoose.Schema.Types.ObjectId]
  }
  classrooms: [mongoose.Schema.Types.ObjectId]
}

mongoose.Schema.Types.String.set('trim', true)
// should return false for empty strings
mongoose.Schema.Types.String.set('validation', (v: string) => Boolean(v))

// Current Fields returned by populate: Name, Hashcode, Employees, Clients, Classrooms
// Fields not returned by populate: n/a

const schoolSchema = new mongoose.Schema<ISchool>(
  {
    // The name of the school
    name: {
      type: String,
      required: [true, 'Please provide a name for the school'],
      maxlength: [60, 'School name cannot be more than 60 characters'],
    },
    // The hashcode of the school
    hashcode: {
      type: String,
      required: [true, 'Please provide a hashcode for the school'],
      minlength: [6, 'School hashcode must be 6 characters in length'],
      maxlength: [6, 'School hashcode must be 6 characters in length'],
      unique: true,
      immutable: true,
    },
    // The Directors and Guides employed by the school
    employees: {
      directors: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Director',
          // populate: {
          //   select: 'name _id',
          // },
          required: [true, 'Please provide at least one director for the school'],
        },
      ],
      guides: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Guide',
          // populate: {
          //   select: 'name _id',
          // },
        },
      ],
    },
    // The Students who attend the school and their Parents
    clients: {
      students: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Student',
          // populate: {
          //   select: 'name _id',
          // },
        },
      ],
      parents: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Parent',
          // populate: {
          //   select: 'name _id',
          // },
        },
      ],
    },
    // The Classrooms of the school
    classrooms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classroom',
      },
    ],
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.School || mongoose.model('School', schoolSchema)
