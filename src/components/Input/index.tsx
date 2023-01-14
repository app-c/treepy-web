import { useField } from '@unform/core'
import {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Box, Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  place?: string
}
export function Input({ name, place, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const { fieldName, defaultValue, error, registerField } = useField(name)

  const handleInput = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <Box isFilled={isFilled} isFocus={isFocused}>
      {/* <p>{place}</p> */}
      <Container isFilled={isFilled} isFocus={isFocused}>
        <input
          defaultValue={defaultValue}
          onFocus={() => setIsFocused(true)}
          onBlur={handleInput}
          ref={inputRef}
          {...rest}
        />

        {error}
      </Container>
    </Box>
  )
}
