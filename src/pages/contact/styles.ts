import styled from 'styled-components'
import fundo from '../../assets/lago.png'
import map from '../../assets/map.png'
import { color } from '../../styles/colors'

export const Container = styled.div``

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 2rem;

  /* height: 70vh; */

  /* background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem;

  position: relative;
  overflow: hidden;
  display: flex;
  z-index: 1;
  background-attachment: fixed; */

  h4 {
    /* font-size: 2.5rem; */
    margin-top: 2rem;
  }

  h1 {
    align-self: center;
    margin-top: 2rem;
  }

  p {
    align-self: center;
    font-size: 1.4rem;
    margin: 2rem 0;
  }

  .button {
    margin-top: 2rem;
  }
`

export const Content = styled.div`
  /* background-color: red; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

  grid-gap: 1rem 5rem;

  .area1 {
    display: flex;
    flex-direction: column;

    /* input {
      border: 0.1px solid ${color.dark[30]};
      margin-top: 1rem;
      height: 7vh;
      border-radius: 4px;
      padding: 2px 1rem;
    } */

    textarea {
      margin-top: 1rem;
      height: 14rem;
      border-radius: 4px;
      padding: 2rem;
      background-color: #eeeeee;
      margin-bottom: 2rem;
    }
  }

  .area2 {
    padding: 0 10vh;
  }
`

export const BoxMap = styled.div`
  width: 100vw;
  height: 40rem;
  background-image: url(${map});
  background-size: 100%;
  background-repeat: no-repeat;
`
