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
  width: 100%;
  flex-direction: column;
`

export const label = styled.p<PropsInput>`
  margin-bottom: -10px;
  font-size: 0.8rem;
  /* align-self: flex-start; */
  color: #ffffff;

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
  height: 40px;
  /* width: calc(100px + 20vw); */
  width: 100%;

  display: flex;
  padding: 2px 1rem;
  align-items: center;

  background-color: #f9f9f9;
  box-shadow: 1px 1px 4px rgba(81, 81, 81, 0.842);
  border-radius: 7px;
  margin: 1rem 0;

  ${(h) =>
    h.isFocus &&
    css`
      border: 2px solid ${color.green[30]};
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
    background-color: transparent;
    width: 100%;
    height: 100%;
  }
`

export const error = styled.p`
  position: relative;
  color: ${color.red[10]};
  top: -10px;
`
