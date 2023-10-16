'use server'
/**
 * School CRUD Actions
 */

import { cache } from 'react'
import { setTimeout } from 'node:timers/promises'
import schools from '@/data/schools.json'
import populateReferences from '@/utils/populateReferences'
import { revalidatePath } from 'next/cache'

// Return typing for these functions is far from ideal, but these are temporary server actions
// I'll implement stricter, better typing when the database is hooked up
// Need to implement these actions with error handling / boundaries

/**
 * Get all Schools
 */
export const getSchools = cache(async () => {
  console.log('Get Schools: Wait 5s')
  revalidatePath('/schools', 'page')
  // await setTimeout(5000)
  // console.log(schools)
  const popSchools = schools.map((school) => populateReferences(school)) as unknown as PopSchool[]

  return popSchools
})

/**
 * Get a School by Id
 */
export const getSchoolById = cache(async (id: string) => {
  console.log(`Get School By Id->${id}: Wait 5s`)
  revalidatePath('/schools/[id]', 'page')
  // await setTimeout(5000)

  const school = schools.find((school) => school._id === id)

  const populatedSchool = populateReferences(school!) as unknown as PopSchool

  return populatedSchool
})
