import { Box, Circle, Container } from './styles'

interface Props {
  selected: boolean
  title: string
  pres: () => void
}

export function Selector({ selected, pres, title }: Props) {
  return (
    <Box>
      <label htmlFor="">
        <Container onClick={pres}>
          <Circle selected={selected} />
        </Container>
        <p>{title}</p>
      </label>
    </Box>
  )
}
