import Menu from '@/components/Menu'
import ProgressTable from '@/components/ProgressTable'
import studentData from '../../data/students.json'
// import lessonData from '../../data/lessongroups.json'
import Link from 'next/link'

export default function HomePage(props: any) {
  const students: Students = studentData.map((student) => ({
    ...student,
    progress: new Map(Object.entries(student.progress)),
  }))

  return (
    // <section className={'bg-map bg-cover'}>
    //   <Nav />
    <>
      <Link href={'/schools'} style={{ border: '2px solid black', padding: '0.5rem' }}>
        Schools
      </Link>
      {/* <ProgressTable lessonGroups={lessonData} students={students} /> */}
    </>
    // </section>
  )
}
