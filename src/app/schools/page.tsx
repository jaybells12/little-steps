/**
 * VIEW ALL SCHOOLS PAGE
 * [ ] This Route should only be accessible to admins
 */
import 'server-only'

import { getSchools } from './actions'
import Link from 'next/link'

export default async function SchoolsPage() {
  // const [schools, setSchools] = useState<ISchool[]>([])
  const schools = await getSchools()
  // useEffect(() => {
  //   getSchools().then((results) => setSchools(results))
  // }, [])

  return (
    <div>
      <Link href={'/home'} style={{ border: '2px solid black', padding: '0.5rem' }}>
        Home
      </Link>
      {schools.map(({ name, hashcode, classrooms, clients: { students, parents }, employees: { guides, directors } }, idx) => {
        return (
          <div key={idx}>
            <p>{name}</p>
            <p>{hashcode}</p>
            <p>{classrooms}</p>
            <p>{directors}</p>
            <p>{guides}</p>
            <p>{students}</p>
            <p>{parents}</p>
          </div>
        )
      })}
    </div>
  )
}
