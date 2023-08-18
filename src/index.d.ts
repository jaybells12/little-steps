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
