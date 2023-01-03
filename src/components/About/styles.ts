import styled from 'styled-components'

import world from '../../assets/mundo.png'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(780px, 1fr));
  grid-template-rows: 35vw;
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
`

export const BoxTexts = styled.div`
  h1 {
    font-size: calc(1vw + 1.5rem);
  }

  div {
    width: 80%;
  }

  .interact {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: calc(10% + 3rem);

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
