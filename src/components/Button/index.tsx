import { ButtonHTMLAttributes } from 'react'
import { Box, Button as Bot, Container } from './styles'
interface PropsButon extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'A' | 'AB' | 'AC' | 'B' | 'C'
  title: string
  pres?: () => void
}
export function Button({ variant = 'A', title, pres, ...res }: PropsButon) {
  return (
    <Container variant={variant}>
      <Bot {...res} onClick={pres}>
        {title}
      </Bot>
    </Container>
  )
}
