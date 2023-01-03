import { color } from '../../../styles/colors'
import { Box, Container } from './styles'

interface Props {
  size?: string
  cor?: string
}

export function ArrowL({ size = '4rem', cor = color.dark[10] }: Props) {
  return (
    <Container>
      <Box size={size} viewBox="0 0 448 635" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M208.602 128.13C-11.7283 276.539 0.569803 265.368 0.410971 317.246C0.267266 365.712 -9.82989 356.772 220.809 512.337C444.391 663.151 446.645 663.764 446.426 574.205C446.267 507.398 439.989 500.182 298.599 404.157L169.574 316.52L296.511 230.629C446.131 129.393 441.01 134.657 445.102 78.0604C453.195 -33.795 447.091 -32.5017 208.602 128.13Z"
          fill={cor}
        />
      </Box>
    </Container>
  )
}
