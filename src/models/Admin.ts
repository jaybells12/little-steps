import mongoose from 'mongoose'

interface IAdmin {
  name: string
  password: string
}

mongoose.Schema.Types.String.set('trim', true)
// should return false for empty strings
mongoose.Schema.Types.String.set('validation', (v: string) => Boolean(v))

const adminSchema = new mongoose.Schema<IAdmin>({
  name: {
    type: String,
    required: [true, 'Please provide a name for the Admin'],
    minlength: [2, 'Admin name cannot be less than 2 characters'],
    maxlength: [60, 'Admin name cannot be more than 60 characters'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password for the admin'],
    minlength: [2, 'Password name cannot be less than 2 characters'],
    maxlength: [60, 'Password name cannot be more than 60 characters'],
  },
})

export default mongoose.models.Admin || mongoose.model('Admin', adminSchema)
