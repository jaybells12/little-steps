import dbConnect from '@/utils/dbConnect'
import Lesson from '@/models/Lesson'

/**
 * VIEW ALL LESSONS PAGE
 */
const testFn = async () => {
  const test = await dbConnect()
  const newLesson = await Lesson.create({
    name: 'Test Lesson',
    primary: 'Primary Group',
    secondary: 'Secondary Group',
  })
  console.log(newLesson)
  const results = await Lesson.find({})
  return results
}

export default async function LessonsPage() {
  async function Testing(data: FormData) {
    'use server'
    console.log(data)
  }
  return (
    <form action={Testing}>
      <input name='name' />
      <input name='email' />
      <input name='password' />
      <button>Click Me</button>
    </form>
  )
}
