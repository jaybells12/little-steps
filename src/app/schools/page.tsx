/**
 * VIEW ALL SCHOOLS PAGE
 * [ ] should only be accessible to admins
 * [ ] Each school is a card with Img / Name / Hashcode / Director (principal director is 0th position)
 * [ ] Each card is a link to the school page
 */
import 'server-only'

import { getSchools } from './actions'
import Link from 'next/link'
import SchoolCard from '@/components/SchoolCard'

export default async function SchoolsPage() {
  const schools = await getSchools()

  const schoolComponents = schools.map(({ _id, name, hashcode, image, employees: { directors } }, idx) => {
    return (
      <Link key={idx} href={`/schools/${_id}`}>
        <SchoolCard name={name} image={image} hash={hashcode} directors={directors} abridged />
      </Link>
    )
  })

  return (
    <>
      <Link href={'/home'} style={{ border: '2px solid black', padding: '0.5rem' }}>
        Home
      </Link>
      <div className={'flex mx-28'}>{schoolComponents}</div>
    </>
  )
}
