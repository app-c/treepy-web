import styled, { css } from 'styled-components'
import { color } from '../../styles/colors'

type PropsInput = {
  isFocus: boolean
  isFilled: boolean
  isErro?: boolean
  sizeW?: string
  sizeH?: string
}

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`

export const label = styled.p<PropsInput>`
  margin-bottom: -10px;
  font-size: 0.8rem;
  /* align-self: flex-start; */
  color: #d2d2d2;

  ${(h) =>
    h.isFilled &&
    css`
      color: ${color.green[10]};
      font-weight: 500;
    `}

  ${(h) =>
    h.isFocus &&
    css`
      color: ${color.green[10]};
      font-weight: 500;
    `}
`

export const Container = styled.div<PropsInput>`
  height: 30px;
  padding: 2px 1rem;

  display: flex;
  align-items: center;
  border-radius: 7px;

  background-color: #f0f0f0;
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
    width: calc(50px + 10vw);
    height: 100%;
    background: #00000000;
  }
`
