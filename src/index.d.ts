type Student = {
  _id: string
  name: string
  progress: Map<string, string>
}

type Lesson = {
  _id: string
  name: string
}

type LessonGroup = {
  _id: string
  name: string
  lessons: lesson[]
}

type LessonGroups = LessonGroup[]
type Students = student[]

type LessonStatusFlags = 'I' | 'M' | 'N' | 'P'

// Model Interfaces
interface IAdmin {
  name: string
  password: string
}

interface IClassroom {
  school: string
  guide: mongoose.Schema.Types.ObjectId
  students: [mongoose.Schema.Types.ObjectId]
}

interface IDirector {
  school: string
  name: {
    first: string
    last: string
  }
  email: string
}

interface IGuide {
  school: string
  name: {
    first: string
    last: string
  }
  email: string
  classroom: mongoose.Schema.Types.ObjectId
}

interface ILesson {
  name: string
  primary: string
  secondary: string
}

interface IParent {
  school: string
  name: {
    first: string
    last: string
  }
  email: string
  children: [mongoose.Schema.Types.ObjectId]
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
  lessons: [
    {
      lesson: mongoose.Schema.Types.ObjectId
      status: LessonStatusFlags
    }
  ]
}
