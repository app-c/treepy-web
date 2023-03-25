export function brlNumber(n: any) {
  let value = String(n)

  value = value.replace(/\D/g, '')
  value = value.replace(/(\d)(\d{2})$/, '$1,$2')

  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.')

  n = value
  return n
}

export function _number(e: string) {
  let value = String(e)

  value = value.replace(/\D/g, '')

  return value
}
