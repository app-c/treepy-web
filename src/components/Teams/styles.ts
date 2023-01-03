import styled from 'styled-components'
import { color } from '../../styles/colors'

export const BoxC = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vw 10vw;

  h2 {
    margin-bottom: 10px;
  }

  .line {
    width: 100%;
    height: 2px;
    margin-bottom: 30px;
    background-color: ${color.dark[20]};
    opacity: 0.6;
  }
`

export const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  grid-gap: 2.5rem;
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
`

export const Avatar = styled.div`
  background-color: ${color.dark[10]};
  width: 100%;
  height: 10vw;
`

export const Content = styled.div`
  padding: 1rem;

  h4 {
    margin-bottom: 10px;
    font-weight: 500;
  }

  p {
    font-weight: 300;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    margin-top: 3rem;
  }
`
