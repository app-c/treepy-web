import { color } from '../../../styles/colors'
import { Box, Container } from './styles'

interface Props {
  size?: string
  cor?: string
}

export function Eletriv({ size = '4rem', cor = color.dark[10] }: Props) {
  return (
    <Container>
      <Box size={size} viewBox="0 0 131 131" fill="none">
        <path
          d="M109.715 85.2556V89.0185H126.648V85.2556H109.715Z"
          fill="#D9D9D9"
        />
        <path
          d="M70.2037 102.189C73.9667 102.189 75.8481 98.8963 75.8481 95.6037C75.8481 92.3111 76.7889 9.05556 76.7889 9.05556C75.7479 4.12409 72.866 2.60338 69.7333 2H8.11481C4.64409 3.98344 3.33255 5.53865 2 9.05556V95.1333C2.77293 99.3526 4.4915 100.673 8.58519 102.189H39.3944M70.2037 102.189C66.4407 102.189 39.3944 102.189 39.3944 102.189M70.2037 102.189H39.3944M37.7481 94.1926H49.9778H52.3296M57.5037 94.1926H64.0889C66.1601 93.3603 67.7443 92.0038 68.3222 89.9593V75.3778M39.3944 102.189C39.3944 102.189 39.6296 117.711 39.6296 121.474C39.6296 125.237 42.9222 129 46.6852 129M46.6852 129C50.4481 129 106.893 129 111.126 129M46.6852 129H111.126M111.126 129C115.359 129 118.652 124.767 118.652 122.415M118.652 122.415C118.652 120.063 118.652 105.952 118.652 105.952M118.652 122.415V105.952M118.652 105.952V103.13M118.652 103.13H122.415C124.32 102.133 125.267 101.347 125.237 99.3667V92.7815C127.408 92.1002 128.217 91.4721 129 89.9593V84.3148C128.437 83.1634 127.938 82.7391 126.648 82.4333H125.237M118.652 103.13H115.359C113.435 102.392 112.588 101.788 111.596 100.307V92.7815C109.479 92.4493 108.483 91.945 107.363 89.9593V84.3148C107.871 83.1056 108.363 82.6664 109.715 82.4333H111.84M111.84 82.4333V72.0852M111.84 82.4333H125.237M125.237 82.4333V72.0852M33.0444 17.5222L13.7593 49.5074H31.163L23.1667 86.1963L65.5 41.0407H49.037L62.6778 17.5222H33.0444ZM109.715 85.2556V89.0185H126.648V85.2556H109.715ZM114.419 93.7222V99.3667L115.359 100.307H121.944L122.885 98.4259V93.7222H114.419Z"
          stroke={cor}
          strokeWidth="4"
        />
      </Box>
    </Container>
  )
}
