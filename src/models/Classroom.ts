import mongoose from 'mongoose'

interface IClassroom {
  school: string
  guide: mongoose.Schema.Types.ObjectId
  students: [mongoose.Schema.Types.ObjectId]
}

mongoose.Schema.Types.String.set('trim', true)
// should return false for empty strings
mongoose.Schema.Types.String.set('validation', (v: string) => Boolean(v))

const classroomSchema = new mongoose.Schema<IClassroom>({
  // The School hashcode of the classroom
  school: {
    type: String,
    required: [true, 'Please provide a hashcode for the school'],
    minlength: [6, 'School hashcodes must be 6 characters in length'],
    maxlength: [6, 'School hashcodes must be 6 characters in length'],
    // Select false prevents this field from being returned on query unless specified
    select: false,
  },
  // The Guide of the classroom
  guide: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Guide',
    required: [true, 'Please provide a guide for the classroom'],
  },
  // The Students of the classroom
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
  ],
})

export default mongoose.models.Classroom || mongoose.model('Classroom', classroomSchema)
