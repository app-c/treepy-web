import { color } from '../../../styles/colors'
import { Box, Container } from './styles'

interface Props {
  size?: string
  cor?: string
  borderColor?: string
}

export function Folha({
  size = '100%',
  cor = color.dark[10],
  borderColor = color.green[20],
}: Props) {
  return (
    <Container>
      <Box size={size} viewBox="0 0 445 602" fill="none">
        <path
          d="M212.5 1H1V373C17.4081 501.162 132.961 606.224 252 600.5H444V227.5C430 102 353.214 18.1311 212.5 1Z"
          fill={cor}
          stroke={borderColor}
        />
      </Box>
    </Container>
  )
}
