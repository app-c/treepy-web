import { Box, Button as Bot, Container } from './styles'
interface PropsButon {
  variant: 'A' | 'AB' | 'AC' | 'B' | 'C'
  title: string
  pres: () => void
}
export function Button({ variant = 'A', title, pres }: PropsButon) {
  return (
    <Container variant={variant}>
      <Bot onClick={pres}>{title}</Bot>
    </Container>
  )
}
