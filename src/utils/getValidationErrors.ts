import { ValidationError } from 'yup'

interface Errors {
  [key: string]: string
}

export function getvalidationErrors(err: ValidationError): Errors {
  const validation: Errors = {}

  err.inner.forEach((h) => {
    validation[h.path!] = h.message
  })

  return validation
}
