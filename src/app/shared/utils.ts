const numberChars = '0123456789'
const hexChars = 'abcdef'

export function generateRandomGuid(): string {
  // pattern 8-4-4-12
  // efa45702-8acb-4e10-bdd2-75f9d8b0ca7c
  // ee05809a-ddcd-4493-aa81-21ce3fa9c753

  let str = ''
  let chars = hexChars + numberChars

  for (let i = 0; i < 32; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  str = `${str.slice(0, 8)}-${str.slice(8, 12)}-${str.slice(12, 16)}-${str.slice(16, 20)}-${str.slice(20, 32)}`

  return str
}

export function orderBy(input: any, byProperty: string): any {
  if (input != null && input.length > 0 && Array.isArray(input)) {
    let result = [...input]
    result.sort((a, b) => (a[byProperty] < b[byProperty] ? -1 : 1))
    return result
  }
  return []
}