import styled from 'styled-components'
import fundo from '../../../assets/fundoUs.png'
import { color } from '../../../styles/colors'

export const Container = styled.div``

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem;
  /* 
  position: relative;
  overflow: hidden;
  display: flex;
  z-index: 1;
  background-attachment: fixed; */

  h1 {
    align-self: center;
    color: #fff;
    margin-bottom: 5px;
  }

  .button {
    margin-top: 2rem;
    width: clamp(6rem, 10rem, 12rem);
    align-self: center;
  }
`

export const subText = styled.p`
  align-self: center;
  color: #fff;
  margin-bottom: 3rem;
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
      border: 1px solid ${color.dark[30]};
      margin-top: 1rem;
      height: 20vh;
      border-radius: 4px;
      padding: 2rem;
    }
  }

  .area2 {
    textarea {
      height: 100%;
      width: 100%;
      padding: 1rem;
      border-radius: 4px;
      border: 1px solid ${color.dark[30]};
    }
  }
`

export const readMor = styled.div`
  display: flex;
`
