import styled, { css } from 'styled-components'
import { color } from '../../styles/colors'

interface PropsSelect {
  selected: boolean
}

export type TTextColor = 'gray' | 'dark'

interface IPropsColorText {
  colorText: TTextColor
}

export const Box = styled.button`
  display: flex;
  background-color: transparent;
  margin: 1rem;

  &:hover {
    cursor: pointer;
  }

  label {
    align-items: center;
    justify-content: center;
    display: flex;

    p {
    }
  }
`

export const text = styled.p<IPropsColorText>`
  margin-left: 10px;
  color: ${(h) => (h.colorText === 'gray' ? color.dark[50] : color.dark[10])};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.1rem;
  height: 1.1rem;
  border: 2px solid ${color.orange[20]};
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
      background-color: ${color.orange[20]};
    `};
`
