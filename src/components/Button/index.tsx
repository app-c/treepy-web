import { ButtonHTMLAttributes } from 'react'
import { Box, Button as Bot, Container } from './styles'
interface PropsButon extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'A' | 'AB' | 'AC' | 'B' | 'C'
  title: string
  sizeW?: string
  sizeH?: string
  pres?: () => void
}
export function Button({
  variant = 'A',
  title,
  sizeH = '100%',
  sizeW = '100%',
  pres,
  ...res
}: PropsButon) {
  return (
    <Container sizeH={sizeH} sizeW={sizeW} variant={variant}>
      <Bot {...res} onClick={pres}>
        {title}
      </Bot>
    </Container>
  )
}
