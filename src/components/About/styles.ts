import styled from 'styled-components'

import world from '../../assets/mundo.png'
import { color } from '../../styles/colors'

export const Container = styled.div``

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  /* grid-template-rows: 35vw; */
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`
export const Inova = styled.img`
  width: 15vw;
`

export const BoxWorld = styled.div`
  background-image: url(${world});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  /* width: 50vw;
  height: 50vh; */
`

export const BoxTexts = styled.div`
  display: flex;
  flex-direction: column;

  /* justify-content: center; */
  h1 {
    font-size: calc(1vw + 50%);
    margin-top: 10vh;
    color: ${color.green[20]};
  }

  div {
    width: 90%;
  }

  .interact {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    .buton {
      display: flex;
      width: 35%;
      height: 80px;
    }
  }

  p {
    margin-top: 20px;
    font-weight: 300;
  }
  padding: calc(1.4vw + 3rem);
`
