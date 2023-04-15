import { ButtonHTMLAttributes } from 'react'
import { Box, Button as Bot, Container } from './styles'
import { Loading } from '../Loading'

interface PropsButon extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'A' | 'AB' | 'AC' | 'B' | 'C'
  title?: string
  sizeW?: string
  sizeH?: string
  pres?: () => void
  load?: boolean
}
export function Button({
  variant = 'A',
  title,
  sizeH = '100%',
  sizeW = '100%',
  pres,
  load,
  ...res
}: PropsButon) {
  return (
    <Container load={load} sizeH={sizeH} sizeW={sizeW} variant={variant}>
      {load ? (
        <Loading />
      ) : (
        <Bot {...res} onClick={pres}>
          {title}
        </Bot>
      )}
    </Container>
  )
}
