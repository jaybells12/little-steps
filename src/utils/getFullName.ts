/**
 * Extract full name from a object containing 'first' and 'last' keys
 * @param Object Must contain keys 'first' and 'last'
 * @returns The full name
 */

export default function getFullName(name: { first: string; last: string } | undefined): string | undefined {
  if (name) {
    const { first, last } = name
    return `${first[0].toUpperCase() + first.slice(1)} ${last[0].toUpperCase() + last.slice(1)}`
  }

  return undefined
}
