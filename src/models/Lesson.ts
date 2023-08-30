import mongoose from 'mongoose'

mongoose.Schema.Types.String.set('trim', true)
// should return false for empty strings
mongoose.Schema.Types.String.set('validation', (v: string) => Boolean(v))

const lessonSchema = new mongoose.Schema<ILesson>({
  name: {
    type: String,
    required: [true, 'Please provide a name for the lesson'],
    minlength: [2, 'Lesson name cannot be less than 2 characters'],
    maxlength: [60, 'Lesson name cannot be more than 60 characters'],
    unique: true,
  },
  primary: {
    type: String,
    required: [true, 'Please provide a primary group for the lesson'],
    minlength: [2, 'Primary group name cannot be less than 2 characters'],
    maxlength: [60, 'Primary group name cannot be more than 60 characters'],
  },
  secondary: {
    type: String,
    minlength: [2, 'Secondary group name cannot be less than 2 characters'],
    maxlength: [60, 'Secondary group name cannot be more than 60 characters'],
  },
})

export default mongoose.models.Lesson || mongoose.model('Lesson', lessonSchema)
