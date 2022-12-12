import styled from 'styled-components'
import { color } from '../../styles/colors'
type Props = {
  variant: 'A' | 'AB' | 'B' | 'C'
}

const propsVariat = {
  A: color.green[200],
  AB: color.green[100],
  B: color.orange[100],
  C: color.red[100],
}

export const Container = styled.div<Props>`
  background-color: ${({ variant: h }) => propsVariat[h]};
  width: 15rem;
  height: 100%;
  padding: 10px;
  border-radius: 10px;

  @media (max-width: 780px) {
    font-size: 0.6rem;
    width: 7rem;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 100%;
  color: #fff;
  font-weight: 600;
`
