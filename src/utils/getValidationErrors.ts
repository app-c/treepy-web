import * as yup from 'yup'

interface Errors {
  [key: string]: string
}

export function getValidationErrors(err: yup.ValidationError): Errors {
  const validationError: Errors = {}

  err.inner.forEach((error) => {
    validationError[error.path!] = error.message
  })

  return validationError
}
