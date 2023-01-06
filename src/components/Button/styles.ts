import styled from 'styled-components'
import { color } from '../../styles/colors'
type Props = {
  variant: 'A' | 'AB' | 'AC' | 'B' | 'C'
}

const propsVariat = {
  A: color.green[20],
  AB: color.green[10],
  AC: color.green[30],
  B: color.orange[10],
  C: color.red[10],
}

export const Box = styled.div`
  display: flex;
  width: 1px;
  background-color: red;
`

export const Container = styled.div<Props>`
  display: flex;

  align-items: center;
  justify-content: center;
  background-color: ${({ variant: h }) => propsVariat[h]};
  padding: 5px 1rem;
  border-radius: 8px;
  min-width: calc(5vw + 10%);

  &:hover {
    opacity: 0.9;
  }

  /* @media (max-width: 780px) {
    font-size: 0.3rem;
    width: 7rem;
    border-radius: 5px;
    padding: 5px;
  } */
`

export const Button = styled.button`
  color: #fff;
  width: 100%;
  height: 100%;

  font-weight: 400;
  font-size: calc(1vw + 50%);
  background-color: transparent;
  align-items: center;
  justify-content: center;
`
