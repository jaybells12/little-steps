import Menu from '@/components/Menu'
import ProgressTable from '@/components/ProgressTable'
import studentData from '../../data/students.json'
import lessonData from '../../data/lessongroups.json'

export default function HomePage(props: any) {
  const students: Students = studentData.map((student) => ({
    ...student,
    progress: new Map(Object.entries(student.progress)),
  }))

  return (
    // <section className={'bg-map bg-cover'}>
    //   <Nav />

    <ProgressTable
      lessonGroups={lessonData}
      students={students}
    />
    // </section>
  )
}
