import { color } from '../../../styles/colors'
import { Box, Container } from './styles'

interface Props {
  size?: string
  cor?: string
}

export function ArrowR({ size = '4rem', cor = color.dark[10] }: Props) {
  return (
    <Container>
      <Box size={size} viewBox="0 0 448 635" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M238.466 506.82C458.796 358.411 446.498 369.582 446.657 317.704C446.801 269.238 456.898 278.178 226.259 122.614C2.67691 -28.2008 0.423006 -28.8135 0.642345 60.7449C0.801176 127.553 7.07883 134.768 148.469 230.793L277.494 318.431L150.557 404.321C0.937315 505.557 6.05777 500.293 1.96597 556.89C-6.12689 668.745 -0.0232309 667.452 238.466 506.82Z"
          fill={cor}
        />
      </Box>
    </Container>
  )
}
