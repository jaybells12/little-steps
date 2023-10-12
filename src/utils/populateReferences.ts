import classrooms from '@data/classrooms.json'
import lessons from '@data/lessons.json'
import students from '@data/students.json'
import users from '@data/users.json'

type ModelTypes = string | Array<string> | number | { [key: string]: ModelTypes }

export default function populateRefences(model: { [key: string]: ModelTypes }) {
  // Not for production, simplified implementation
  // Can't worry too much about it now, but how can I clean this up?
  // Since arrays are passed by reference (kinda), is this why i can map through and change the values?
  Object.entries(model).map(([outerKey, outerValue]) => {
    Object.entries(outerValue).map(([key, value]) => {
      if (Array.isArray(value)) {
        switch (key) {
          case 'directors':
          case 'guides':
          case 'parents':
            value.map((id, idx) => (value[idx] = users.find((user) => user.id === id)))
            break
          case 'students':
            value.map((id, idx) => (value[idx] = students.find((student) => student.id === id)))
            break
        }
      }
    })
    if (outerKey === 'classrooms' && Array.isArray(outerValue)) {
      outerValue.map((id, idx) => {
        //@ts-ignore
        outerValue[idx] = classrooms.find((classroom) => classroom.id === id)
      })
    }
  })
}
