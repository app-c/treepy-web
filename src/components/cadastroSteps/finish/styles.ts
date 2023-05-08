import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { color } from '../../../styles/colors'

export const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 2rem auto;

  h3 {
    color: #c9c9c9;
    margin-bottom: 2rem;
  }
`

export const title = styled.h3`
  margin: 2rem;
`

export const boxTermo = styled(Link)`
  color: ${color.green[10]};
  font-weight: 700;
  font-size: calc(16px + 0.5vw);

  margin-bottom: 2rem;
`

export const content = styled.div``
