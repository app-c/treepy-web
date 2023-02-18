import styled, { keyframes } from 'styled-components'
import { color } from '../../styles/colors'

export const Container = styled.div``

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loading = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${color.orange[10]};
  border-radius: 50%;
  width: 34px;
  height: 34px;
  animation: ${spin} 1s linear infinite;
`
