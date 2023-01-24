import styled from 'styled-components'
import { color } from '../../styles/colors'

export const Container = styled.div`
  width: 100vw;
  padding: 2rem;

  display: flex;
  flex-direction: column;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid ${color.green[10]};
`
