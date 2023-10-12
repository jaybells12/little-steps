'use server'

/**
 * Lesson CRUD Actions
 */

import Lesson from '@/models/Lesson'

export default async function lessonController(method: DBMethods) {
  switch (method) {
    case 'GET':
      try {
      } catch (e) {}
    case 'POST':
      try {
      } catch (e) {}
    case 'PUT':
      try {
      } catch (e) {}
    case 'DELETE':
      try {
      } catch (e) {}
    default:
      throw Error(`Invalid Method: ${method}`)
  }
}
