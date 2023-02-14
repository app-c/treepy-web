import styled from 'styled-components'
import { color } from '../../styles/colors'

export const BoxC = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vw 10vw;

  h1 {
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

  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  grid-gap: 2.5rem;
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 3px solid #cbcbcb; */
  padding: 1rem;
  border-radius: 5px;
`

export const Avatar = styled.img`
  width: 100%;
  /* height: 10vw; */
  border-radius: 5px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  h4 {
    margin-bottom: 10px;
    font-weight: 500;
  }

  p {
    font-weight: 300;
  }
`

export const Links = styled.div`
  display: flex;
  align-items: flex-end;
  width: 70%;
  flex: 1;
  /* margin-top: 1rem; */
  /* top: 2rem; */
  align-self: baseline !important;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }
`
