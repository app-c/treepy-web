export function _brl(number: number) {
  const value = Number(number / 10).toFixed(1)
  const form = Number(value)

  const formattedNumber = form.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return formattedNumber
}
