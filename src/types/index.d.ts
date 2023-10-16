/**
 * EVALUATE WHETHER OR NOT TO DELETE THESE TYPES
 */
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

/**
 * FORM TYPES
 */
type FormTypes = 'classroom' | 'lesson' | 'school' | 'student' | 'user'

/**
 * DATABASE TYPES (? what is this for ?)
 */
type DBMethods = 'GET' | 'POST' | 'PUT' | 'DELETE'

/**
 * MODEL INTERFACES
 */
interface IUser {
  _id: mongoose.Schema.Types.ObjectId
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
  _id: mongoose.Schema.Types.ObjectId
  name: string
  school: string
  guide: mongoose.Schema.Types.ObjectId
  students: [mongoose.Schema.Types.ObjectId]
  curriculum: [mongoose.Schema.Types.ObjectId]
}

interface ILesson {
  _id: mongoose.Schema.Types.ObjectId
  name: string
  primary: string
  secondary: string
}

interface ISchool {
  _id: mongoose.Schema.Types.ObjectId
  name: string
  hashcode: string
  image: string
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
  _id: mongoose.Schema.Types.ObjectId
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

/**
 * POPULATED DATABASE SCHEMA INTERFACES
 */

type PopModelTypes = PopUser | PopClassroom | PopSchool | PopLesson | PopStudent

interface PopUser {
  _id: mongoose.Schema.Types.ObjectId
  school: string
  email: string
  name: {
    first: string
    last: string
  }
  password: string
  role: number
}

interface PopClassroom {
  _id: mongoose.Schema.Types.ObjectId
  name: string
  school: string
  guide: Partial<PopUser>
  students: Partial<PopStudent>[]
  curriculum: Partial<PopClassroom>[]
}

interface PopLesson {
  _id: mongoose.Schema.Types.ObjectId
  name: string
  primary: string
  secondary: string
}

interface PopSchool {
  _id: mongoose.Schema.Types.ObjectId
  name: string
  hashcode: string
  image: string
  employees: {
    directors: PopUser[]
    guides: PopUser[]
  }
  clients: {
    students: PopStudent[]
    parents: PopUser[]
  }
  classrooms: PopClassroom[]
}

interface PopStudent {
  _id: mongoose.Schema.Types.ObjectId
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
    parents: Partial<PopUser>[]
  }
  classroom: mongoose.Schema.Types.ObjectId
  progress: {
    [index: string]: LessonStatusFlags
  }
}
