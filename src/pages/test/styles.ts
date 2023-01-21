import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
`

const fol = keyframes`
  to  {
    border-radius: 5px;
  }
`

export const Box = styled.div`
  background-color: blue;
  width: 10rem;
  height: 13rem;

  border-radius: 0 5rem 0 5rem;
  transition: 2s;

  &:hover {
    border-radius: 5px;
  }

  /* transition-property: ; */
`
