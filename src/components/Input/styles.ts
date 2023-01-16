import styled, { css } from 'styled-components'
import { color } from '../../styles/colors'

type PropsInput = {
  isFocus: boolean
  isFilled: boolean
  isErro: boolean
}

export const Box = styled.div<PropsInput>`
  p {
    margin-bottom: 5px;
    font-size: 1rem;
    /* 
    ${(h) =>
      h.isFilled &&
      css`
        color: ${color.green[10]};
        font-weight: 500;
      `} */
  }
`

export const Container = styled.div<PropsInput>`
  width: 100%;
  height: 2.8rem;
  padding: 5px 1rem;

  display: flex;
  align-items: center;
  border-radius: 10px;

  background-color: #fff;
  margin: 1rem 0;

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

    ${(h) =>
    h.isErro &&
    css`
      border: 2px solid #c90606;
      color: #c90606;
    `}


  input {
    flex: 1;
    margin: 0;
    background: transparent;
  }
`
