/**
 * Flattens an object
 * @param {Object} obj
 * @returns Object
 */

export default function flattenObj(obj: Record<string, any>) {
  let result: Record<string, any> = {}

  for (const keyI in obj) {
    if (typeof obj[keyI] === 'object' && !Array.isArray(obj[keyI])) {
      const temp = flattenObj(obj[keyI])
      for (const keyJ in temp) {
        result[`${keyI}.${keyJ}`] = temp[keyJ]
      }
    } else {
      result[keyI] = obj[keyI]
    }
  }
  return result
}
