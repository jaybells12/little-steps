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

type UserFormState = {
  first: {
    value: string
    isError: boolean
  }
  last: {
    value: string
    isError: boolean
  }
  email: {
    value: string
    isError: boolean
  }
}

type UserFormPayload = {
  type: string
  payload: {
    value: string
    isError: boolean
  }
}

type LessonGroups = LessonGroup[]
type Students = student[]
