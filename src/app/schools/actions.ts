'use server'
/**
 * School CRUD Actions
 */

import { cache } from 'react'
import { setTimeout } from 'node:timers/promises'
import schools from '@data/schools.json'
import classrooms from '@data/classrooms.json'
import lessons from '@data/lessons.json'
import students from '@data/students.json'
import users from '@data/users.json'

export const getSchools = cache(async () => {
  console.log('Server: Wait 5s')
  await setTimeout(5000)

  schools.map((school) => {
    // Can't worry too much about it now, but how can I clean this up?
    // Since arrays are passed by reference (kinda), is this why i can map through and change the values?
    Object.entries(school).map(([outerKey, outerValue]) => {
      Object.entries(outerValue).map(([key, value]) => {
        if (Array.isArray(value)) {
          switch (key) {
            case 'directors':
            case 'guides':
            case 'parents':
              value.map((id, idx) => {
                value[idx] = users.find((user) => user.id === id)?.fullName || 'No Such User'
              })
              break
            case 'students':
              value.map((id, idx) => {
                value[idx] = students.find((student) => student.id === id)?.fullName || 'No Such User'
              })
              break
          }
        }
      })
      if (outerKey === 'classrooms' && Array.isArray(outerValue)) {
        outerValue.map((id, idx) => {
          outerValue[idx] = classrooms.find((classroom) => classroom.id === id)?.name || 'No Such Classroom'
        })
      }
    })
  })

  return schools as ISchool[]
})
