'use server'
/**
 * School CRUD Actions
 */

import { cache } from 'react'
import { setTimeout } from 'node:timers/promises'
import schools from '@data/schools.json'
import populateRefences from '@/utils/populateReferences'

/**
 * Get all Schools
 */
export const getSchools = cache(async () => {
  console.log('Get Schools: Wait 5s')
  await setTimeout(5000)

  schools.map((school) => {
    populateRefences(school)
  })

  return (schools as PopSchool[]) ?? 'No schools found!'
})

// Probably needs to be structured with error-handling in mind
/**
 * Get a School by Id
 */
export const getSchoolById = cache(async (id: string) => {
  console.log('Get School By Id: Wait 5s')
  await setTimeout(5000)

  const school = schools.find((school) => school._id === id)

  if (school) populateRefences(school)

  return (school as PopSchool) ?? 'No school found!'
})
