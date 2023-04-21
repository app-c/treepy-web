import styled from 'styled-components'

export const container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin: 2rem auto;
  z-index: 2;
`

export const title = styled.p``

export const boxRow = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-around;
`

export const box = styled.div`
  z-index: 5;
  align-items: center;
  justify-content: center;

  display: flex;
  flex-direction: column;
`

export const line = styled.div`
  width: 90%;
  height: 1px;

  background-color: red;
  position: relative;

  top: 1.7rem;
  align-self: center;
  z-index: 1;
`
