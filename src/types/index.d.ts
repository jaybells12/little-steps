type Student = {
  _id: string
  name: string
  progress: Map<string, string>
}
// Where is this ?
type Lesson = {
  _id: string
  name: string
}
// Where is this ?
type LessonGroup = {
  _id: string
  name: string
  lessons: lesson[]
}

type LessonGroups = LessonGroup[]
type Students = student[]

type LessonStatusFlags = 'I' | 'M' | 'N' | 'P'

//Form Types
type FormTypes = 'classroom' | 'lesson' | 'school' | 'student' | 'user'

// Database Types
type DBMethods = 'GET' | 'POST' | 'PUT' | 'DELETE'

// Model Interfaces
interface IUser {
  school: string
  email: string
  name: {
    first: string
    last: string
  }
  password: string
  role: number
}

interface IClassroom {
  name: string
  school: string
  guide: mongoose.Schema.Types.ObjectId
  students: [mongoose.Schema.Types.ObjectId]
  curriculum: [mongoose.Schema.Types.ObjectId]
}

interface ILesson {
  name: string
  primary: string
  secondary: string
}

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

interface IStudent {
  school: string
  name: {
    first: string
    last: string
  }
  details: {
    birthday: Date
    address: {
      street: string
      city: string
      state: string
      zipcode: number
    }
    parents: [mongoose.Schema.Types.ObjectId]
  }
  classroom: mongoose.Schema.Types.ObjectId
  progress: {
    [index: string]: LessonStatusFlags
  }
}
