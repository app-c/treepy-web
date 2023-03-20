import styled from 'styled-components'
import { color } from '../../styles/colors'

export const BoxC = styled.div`
  display: flex;
  flex-direction: column;
  padding: calc(0.5rem + 1vw);

  h1 {
    margin-bottom: 10px;
  }

  h3 {
    color: ${color.green[30]};
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
  display: flex;
  /* overflow: scroll;

  ::-webkit-scrollbar {
    width: 5px;
    height: 15px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #3f3f3f;
  }

  /* Define o hover da thumb */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #282525;
  } */
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 3px solid #cbcbcb; */
  padding: 1rem;
  border-radius: 5px;
  /* width: 200px;
  height: 200px; */

  span {
    color: ${color.dark[10]};
    width: 10rem;
  }
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
  width: clamp(15rem, 25vw, 35vw);

  p {
    font-weight: 300;
  }

  h3 {
    color: ${color.green[30]};
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
