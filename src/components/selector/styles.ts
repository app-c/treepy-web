import styled, { css } from 'styled-components'
import { color } from '../../styles/colors'

interface PropsSelect {
  selected: boolean
}

export const Box = styled.div`
  display: flex;
  margin-right: 1rem;
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
  width: 1.1rem;
  height: 1.1rem;
  border: 2px solid ${color.green[20]};
  border-radius: 1rem;
`

export const Circle = styled.div<PropsSelect>`
  width: 0.4rem;
  height: 0.4rem;
  opacity: 0;
  border-radius: 0.5rem;
  transition: 0.6s;

  ${(h) =>
    h.selected &&
    css`
      opacity: 1;
      background-color: ${color.green[20]};
    `};
`
