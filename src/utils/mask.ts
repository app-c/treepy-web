import React from 'react'

export function cep(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 9

  let value = e.currentTarget.value

  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{5})(\d)/, '$1-$2')
  e.currentTarget.value = value

  return e
}

export function cpf(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value

  value = value.replace(/\D/g, '')
  // value = value.replace(/(\d)(\d{2})$/, '$1.$2')

  // value = value.replace(/(?=(\d{3})+(\D))\B/g, '.')

  value = value.replace(
    /(\d{1,3})(\d{1,3})?(\d{1,3})?(\d{1,2})?/,
    function (match, p1, p2, p3, p4) {
      if (p2 === undefined) {
        return `${p1}`
      }
      if (p3 === undefined) {
        return `${p1}.${p2}`
      }

      if (p4 === undefined) {
        return `${p1}.${p2}.${p3}`
      }

      return `${p1}.${p2}.${p3} - ${p4}`
    },
  )

  e.currentTarget.value = value
  return e
}

export function currency(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value

  value = value.replace(/\D/g, '')
  value = value.replace(/(\d)(\d{2})$/, '$1,$2')

  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.')

  e.currentTarget.value = value
  return e
}

export function number(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value

  value = value.replace(/\D/g, '')

  e.currentTarget.value = value
  return e
}

export function expire(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value

  value = value.replace(/\D/g, '')

  // value = value.replace(/(\d)(\d{4})$/, '$1/$2')

  // e.currentTarget.value = value

  value = value.replace(/(\d{1,2})(\d{1,4})?/, function (match, p1, p2) {
    if (p2 === undefined) {
      return `${p1}`
    }
    // if (p3 === undefined) {
    //   return `${p1}/${p2}`
    // }

    return `${p1}/${p2}`
  })

  e.currentTarget.value = value

  return e
}

export function card(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value

  value = value.replace(/\D/g, '')

  value = value.replace(/(\d)(\d{4})$/, '$1 $2')

  value = value.replace(/(?=(\d{4})+(\D))\B/g, ' ')

  e.currentTarget.value = value
  return e
}

export function float(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value

  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d{1,2})?/, function (match, p1, p2, p3, p4) {
    if (p2 === undefined) {
      return `00,${p1}`
    }
    if (p3 === undefined) {
      return `${p1},${p2}`
    }

    return `${p1},${p2}`
  })

  const vl = value

  return vl
}
