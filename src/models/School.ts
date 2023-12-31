import mongoose from 'mongoose'
import generateHash from '@/utils/generateShortCode'

mongoose.Schema.Types.String.set('trim', true)
// should return false for empty strings
mongoose.Schema.Types.String.set('validation', (v: string) => Boolean(v))

const schoolSchema = new mongoose.Schema<ISchool>(
  {
    // The Name of the school
    name: {
      type: String,
      required: [true, 'Please provide a name for the school'],
      maxlength: [60, 'School name cannot be more than 60 characters'],
    },
    // The Hashcode of the school (generated by schema middleware)
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
          ref: 'User',
        },
      ],
      guides: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    },
    // The Students who attend the school and their Parents
    clients: {
      students: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Student',
        },
      ],
      parents: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
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

schoolSchema.pre('save', function (next) {
  this.hashcode = generateHash(6)
  console.log('School Hash Generated: ', this.hashcode)
  next()
})

export default mongoose.models.School || mongoose.model('School', schoolSchema)
