import styled, { css } from 'styled-components'
import { color } from '../../styles/colors'

type PropsInput = {
  isFocus: boolean
  isFilled: boolean
}

export const Box = styled.div<PropsInput>`
  p {
    margin-bottom: 5px;
    font-size: 1rem;

    ${(h) =>
      h.isFilled &&
      css`
        color: ${color.green[10]};
        font-weight: 500;
      `}
  }
`

export const Container = styled.div<PropsInput>`
  width: 100%;
  height: 2.8rem;

  display: flex;
  align-items: center;
  border-radius: 10px;

  background-color: #e0e0e0f8;
  margin-bottom: 10px;

  ${(h) =>
    h.isFocus &&
    css`
      border: 2px solid ${color.green[10]};
    `}

  ${(h) =>
    h.isFilled &&
    css`
      border: 2px solid ${color.green[10]};
    `}


  input {
    flex: 1;
    padding: 5px 1rem;
    background: transparent;
  }
`
