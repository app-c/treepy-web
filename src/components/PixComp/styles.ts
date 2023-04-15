import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 2rem auto;

  width: 100%;
`

export const boxImag = styled.div`
  width: calc(10rem + 5vw);
  height: calc(10rem + 5vw);

  background-color: red;
`

export const grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
`

export const preview = styled.div``
