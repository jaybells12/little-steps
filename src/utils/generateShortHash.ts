/**
 * Generates a short hash
 * @param size The length of the hash
 * @returns Hash string
 */
export default function hashID(size: number) {
  const MASK = 0x3d
  const LETTERS = 'abcdefghijklmnopqrstuvwxyz'
  const NUMBERS = '1234567890'
  const charset = `${NUMBERS}${LETTERS}${LETTERS.toUpperCase()}`.split('')

  const bytes = new Uint8Array(size)
  crypto.getRandomValues(bytes)

  return bytes.reduce((acc, byte) => `${acc}${charset[byte & MASK]}`, '')
}
