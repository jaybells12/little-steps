/**
 * VIEW A SCHOOL PAGE
 * 1. Nav Bar
 * 2. Side Menu
 * 3. User Card, each card is link
 * 4. Organizer Shell
 */
import 'server-only'

import { getSchoolById } from '../actions'
import School from '@/components/School'

export const revalidate = 3600

export default async function SchoolPage({ params }: { params: { id: string } }) {
  const school = await getSchoolById(params.id)

  const { name, hashcode, image, employees, clients, classrooms } = school

  return <School name={name} hash={hashcode} imgSrc={image} employees={employees} clients={clients} classrooms={classrooms} />
}
