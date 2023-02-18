import styled, { css, keyframes } from 'styled-components'

import world from '../../assets/flor.png'
import { color } from '../../styles/colors'

interface PropsShow {
  readMor: boolean
}

export const Container = styled.div``

export const Content = styled.div<PropsShow>`
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  /* grid-template-rows: 35vw; */
  transition: 0.5s;

  ${(h) =>
    h.readMor &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
`

const animetedImage = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px) scale(0.95) rotate(1deg);
  }

  100% {
    opacity: 1;
    transform: translateX(0px) scale(1);

  }
`

export const Image = styled.img<PropsShow>`
  width: 100%;
  height: 100%;

  ${(h) =>
    h.readMor &&
    css`
      animation: ${animetedImage} 1s;
      width: 100vw;
    `}
`
export const Inova = styled.img`
  width: 15vw;
`

export const Texts = styled.p`
  font-weight: 300;
  margin-top: 10px;
  /* font-size: max(, 1.1vw); */
`

export const BoxTexts = styled.div<PropsShow>`
  display: flex;
  flex-direction: column;
  width: 70vw;

  ${(h) =>
    h.readMor &&
    css`
      width: 100vw;
      /* align-items: center; */
      justify-content: center;

      @media (max-width: 780px) {
        width: 98vw;
      }

      h2 {
        margin-top: 10vw;
        margin-bottom: 20px;
        color: ${color.green[10]};
      }

      h3 {
        font-weight: 800;
      }
    `}

  /* justify-content: center; */
  h1 {
    margin-bottom: 10px;
    color: ${color.green[20]};
  }

  h3 {
    font-weight: 800;
  }

  .interact {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    /* .buton {
      display: flex;
      width: 35%;
      height: 60px;
    } */
  }

  padding: calc(1.4vw + 3rem);
`

export const Box = styled.div`
  width: 70vw;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  align-self: center;
`

export const Mission = styled.div`
  display: grid;
  width: 100%;
  margin-top: 2rem;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem 2rem;
`
