import styled from 'styled-components'
import folha from '../../assets/folha.svg'
import { color } from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: #3a2a2a;
  height: 100vh;
  background-position: 50% 0%;

  p {
    color: #fff;
  }

  @media (max-width: 780px) {
    height: 40vh;
  }
`

export const Image = styled.img`
  width: 100%;

  opacity: 0.9;
`

export const BoxElement = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  margin-top: 5rem;

  /* .one {
    font-size: 3.4rem;
    font-weight: 400;
  }

  .two {
    font-size: 4.4rem;
    font-weight: 400;
  }

  .tree {
    font-size: 5.4rem;
    font-weight: 800;
  } */

  /* @media (max-width: 1060px) {
    margin-top: 6rem;
    .one {
      font-size: 2.5rem;
    }
    .two {
      font-size: 3.5rem;
    }
    .tree {
      font-size: 4.4rem;
    }
  } */
  /* 
  @media (max-width: 780px) {
    margin-top: 2rem;

    .texts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 1rem;
    }
    .one {
      font-size: 1rem;
    }
    .two {
      font-size: 1.5rem;
    }
    .tree {
      font-size: 2rem;
    }
  } */
`

export const BoxText = styled.div`
  width: 100%;
  padding: 0 5rem;

  .one {
    font-size: calc(1rem + 10%);
  }
  .two {
    font-size: calc(1.2rem + 20%);
  }
  .tree {
    font-size: calc(1rem + 30%);
    font-weight: 600;
  }
`

export const BoxIco = styled.div`
  display: flex;
  width: 10%;
  align-items: center;
  justify-content: center;

  @media (max-width: 780px) {
  }
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 4.5rem;
  margin-top: 4rem;

  @media (max-width: 780px) {
    width: 17rem;
    height: 3rem;
  }
`

export const Calc = styled.div`
  display: flex;
  height: 17rem;

  @media (max-width: 780px) {
    height: 10rem;
  }
`

export const BoxCalcText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${color.orange[20]};
  width: 50vw;
  align-items: center;
  justify-content: center;
  color: #ffff;
  z-index: 1;
  padding: 20px;

  .title {
    font-size: 2.5rem;
    font-weight: 600;
  }

  p {
    align-self: flex-start;
  }

  @media (max-width: 1100px) {
    .title {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 780px) {
    .title {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`

export const BoxCalc = styled.div`
  display: flex;
  background-color: ${color.orange[10]};
  width: 50vw;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative;

  div {
    height: 4.5rem;
  }

  @media (max-width: 780px) {
    div {
      height: 3.3rem;
    }
  }
`

export const BoxIcoArrow = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  background-color: rgba(202, 157, 79, 0);
  align-items: center;
  justify-content: center;
  left: 46vw;
  top: 71rem;

  @media (max-width: 780px) {
    display: none;
  }
`

export const BoxFolha = styled.div``

export const ContentTextFolha = styled.div``

export const BoxGridFolha = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  .folha1 {
    display: flex;
    justify-content: center;
    background-color: red;
    background-image: url(${folha});
    background-size: contain;

    background-repeat: no-repeat;

    width: 15rem;
    height: 20rem;

    p {
      color: #fff;
    }
  }

  .folha2 {
    background-color: blue;

    display: flex;
    justify-content: center;
    background-color: red;
    background-image: url(${folha});
    background-size: contain;

    background-repeat: no-repeat;

    width: 15rem;
    height: 20rem;
  }

  .folha3 {
    background-color: blue;

    display: flex;
    justify-content: center;
    background-color: red;
    background-image: url(${folha});
    background-size: contain;

    background-repeat: no-repeat;

    width: 15rem;
    height: 20rem;
  }

  .folha4 {
    background-color: blue;

    display: flex;
    justify-content: center;
    background-color: red;
    background-image: url(${folha});
    background-size: contain;

    background-repeat: no-repeat;

    width: 15rem;
    height: 20rem;
  }
`

export const ContentFolha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
