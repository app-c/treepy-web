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
  width: 1.5rem;
  height: 1.5rem;
  border: 0.21rem solid ${color.green[40]};
  border-radius: 1rem;
`

export const Circle = styled.div<PropsSelect>`
  width: 0.6rem;
  height: 0.6rem;
  opacity: 0;
  transition: 0.6s;

  ${(h) =>
    h.selected &&
    css`
      opacity: 1;
      background-color: ${color.green[20]};
    `};

  border-radius: 0.5rem;
`
