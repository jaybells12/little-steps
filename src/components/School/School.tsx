import getFullName from '@/utils/getFullName'

type SchoolProps = {
  name: string
  hash: string
  imgSrc: string
  employees: {
    directors: PopUser[]
    guides: PopUser[]
  }
  clients: {
    parents: PopUser[]
    students: PopStudent[]
  }
  classrooms: PopClassroom[]
}

export default function School({ name, hash, imgSrc, employees: { directors, guides }, clients: { parents, students }, classrooms }: SchoolProps) {
  const directorsArr = directors.map((director, idx) => <p key={idx}>Director: {getFullName(director?.name)}</p>)
  const guidesArr = guides.map((guide, idx) => <p key={idx}>Guide: {getFullName(guide?.name)}</p>)
  const studentsArr = students.map((student, idx) => <p key={idx}>Student: {getFullName(student?.name)}</p>)
  const parentsArr = parents.map((parent, idx) => <p key={idx}>Parent: {getFullName(parent?.name)}</p>)

  return (
    <article>
      <img src={imgSrc} alt={'Image of the school'} />
      <h1>{name}</h1>
      <p>
        <i>{hash}</i>
      </p>
      <h2>Directors</h2>
      {directorsArr}
      <h2>Guides</h2>
      {guidesArr}
      <h2>Students</h2>
      {studentsArr}
      <h2>Parents</h2>
      {parentsArr}
    </article>
  )
}
