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

//Async is how next js handles using this server action. Is it ok?
export default async function SchoolsPage() {
  const schools = await getSchools()

  const schoolCardComponents = schools.map(({ _id, name, hashcode, image, employees: { directors } }, idx) => {
    return (
      <Link key={idx} href={`/schools/${_id}`}>
        <SchoolCard name={name} image={image} hash={hashcode} directors={directors} abridged />
      </Link>
    )
  })

  return (
    <>
      <Link href={'/home'} className={'border border-black p-2 w-24 h-24 shrink-0'}>
        Home
      </Link>
      {schoolCardComponents}
    </>
  )
}
