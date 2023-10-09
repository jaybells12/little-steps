/**
 * Extract full name from a object containing 'first' and 'last' keys
 * @param Object Must contain keys 'first' and 'last'
 * @returns The full name
 */

export default function getFullName({ first, last }: { first: string; last: string }): string {
  return `${first[0].toUpperCase() + first.slice(1)} ${last[0].toUpperCase() + last.slice(1)}`
}
