import mongoose from 'mongoose'

mongoose.Schema.Types.String.set('trim', true)
// should return false for empty strings
mongoose.Schema.Types.String.set('validation', (v: string) => Boolean(v))

const classroomSchema = new mongoose.Schema<IClassroom>({
  // The Name of the classroom
  name: {
    type: String,
    required: [true, 'Please provide a name for the classroom'],
    minlength: [2, 'First name cannot be less than 2 characters'],
    maxlength: [30, 'First name cannot be more than 30 characters'],
  },
  // The Guide of the classroom
  guide: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please provide a guide for the classroom'],
  },
  // The Students of the classroom
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
  ],
  // The Curriculum of the classroom
  curriculum: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson',
    },
  ],
})

export default mongoose.models.Classroom || mongoose.model('Classroom', classroomSchema)
