import styled, { css } from 'styled-components'
import { color } from '../../styles/colors'

interface PropsSelect {
  selected: boolean
}

export const Box = styled.div`
  display: flex;
  label {
    align-items: center;
    justify-content: center;
    display: flex;

    p {
      margin-left: 10px;
    }
  }
`

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 0.3rem solid ${color.orange[10]};
  border-radius: 1rem;
`

export const Circle = styled.div<PropsSelect>`
  width: 0.9rem;
  height: 0.9rem;
  opacity: 0;
  transition: 1s;

  ${(h) =>
    h.selected &&
    css`
      opacity: 1;
      background-color: red;
    `};

  border-radius: 0.5rem;
`
