import dbConnect from '@/utils/dbConnect'
import Lesson from '@/models/Lesson'
import User from '@/models/User'

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

const testUserFn = async () => {
  await dbConnect()
  const newUser = await User.create({})
}

export default async function LessonsPage() {
  async function Testing(formData: FormData) {
    'use server'
    // const { name, email, password, role } = data
    // const user = {}
    // console.log(formData.entries())
    // for (const pair of formData.entries()) {
    //   console.log(`${pair[0]}, ${pair[1]}`);
    // }
    const user = Object.fromEntries(formData.entries())
    const [first, last] = user.name.split(' ')
    user.name = {
      first,
      last,
    }
    console.log(user)
    await dbConnect()
    const newUser = await User.create(user)
    console.log(newUser)
  }
  return (
    <form action={Testing}>
      <input name='name' />
      <input name='email' />
      <input name='password' />
      <input name='role' />
      <button>Click Me</button>
    </form>
  )
}
