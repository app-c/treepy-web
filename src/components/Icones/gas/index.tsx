import { color } from '../../../styles/colors'
import { Box, Container } from './styles'

interface Props {
  size?: string
  cor?: string
}

export function Gas({ size = '4rem', cor = color.dark[10] }: Props) {
  return (
    <Container>
      <Box size={size} viewBox="0 0 127 107" fill="none">
        <path
          d="M65 29.5V3H29V29M65 29.5L47 29.25M65 29.5L68 30C81.8508 33.0311 86.526 38.0119 91 51V56V112.5M29 29L47 29.25M29 29L22 30C11.1507 34.5375 7.41457 39.3207 3 50V56M47 29.25V21M47 21C49.5 20.5 51.5 18.5 51.5 16C51 13 49.5 11.5 47 11.5C43.5 11.5 42.5 13.5 42 16C42 18.5 44 20.5 47 21ZM3 112.5V118C6.51737 124.208 9.62695 127.218 19 131H21M3 112.5V56M3 112.5H91M3 56H14M91 112.5V117L76 131H73M21 131V140L73 139.5V131M21 131H73"
          stroke={cor}
          strokeWidth="5"
        />
        <path
          d="M18 56H65.5H89M49 64L42.5 72V77.5L45.5 81.5V83.5L43.5 85.5H42.5L39.5 82.5V77.5L35.5 74.5V79.5L31.5 86.5V91.5L32.5 94.5L33.5 96.5L40.5 102.5H42.5L41.5 101.5V100.5L41 100V97L44 94H46L46.5 94.5H49.5L51.5 92.5V87.5H52.5L55.5 92.5V98.5L52.5 103.5L55.5 102.5L61.5 96.5L62.5 94.5V89.5L61.5 86.5L48.5 72.5V66.5L49 64Z"
          stroke={cor}
          strokeWidth="4"
        />
      </Box>
    </Container>
  )
}
