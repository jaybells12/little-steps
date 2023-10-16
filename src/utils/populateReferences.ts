import classrooms from '@/data/classrooms.json'
import lessons from '@/data/lessons.json'
import students from '@/data/students.json'
import users from '@/data/users.json'

type SchoolDataPre = {
  _id: string
  name: string
  hashcode: string
  image: string
  employees: {
    directors: string[]
    guides: string[]
  }
  clients: {
    students: string[]
    parents: string[]
  }
  classrooms: string[]
}

export default function populateReferences(model: SchoolDataPre) {
  // Not for production
  // this function will be unnecessry when database is implemented
  // Can't worry too much about it now, but how can I clean this up?
  // Possibly need to return a new object here
  let newObj = Object.assign({}, model)
  // Array of k,v pairs where sometimes v is an object?
  Object.entries(model).map(([outerKey, outerValue]) => {
    if (typeof outerValue === 'object') {
      if (Array.isArray(outerValue) && outerKey === 'classrooms') {
        //@ts-expect-error
        newObj.classrooms = outerValue.map((id) => classrooms.find((classroom) => classroom.id === id) ?? 'No such Classroom')
      } else {
        Object.entries(outerValue).map(([innerKey, innerValue]) => {
          switch (innerKey) {
            case 'directors':
            case 'guides':
            case 'parents':
              //@ts-expect-error
              newObj[outerKey][innerKey] = innerValue.map((id) => users.find((user) => user.id === id) ?? 'No such User')
              break
            case 'students':
              //@ts-expect-error
              newObj[outerKey][innerKey] = innerValue.map((id) => students.find((student) => student.id === id) ?? 'No such Student')
              break
          }
        })
      }
    }
  })

  return newObj
}
