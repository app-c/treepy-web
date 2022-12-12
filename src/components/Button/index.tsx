import { Button as Bot, Container } from './styles'
interface PropsButon {
  variant: 'A' | 'B' | 'C'
  title: string
}
export function Button({ variant = 'A', title }: PropsButon) {
  return (
    <Container variant={variant}>
      <Bot>
        <h1>{title}</h1>
      </Bot>
    </Container>
  )
}
