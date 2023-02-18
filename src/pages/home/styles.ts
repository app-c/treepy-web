import styled from 'styled-components'
import folha from '../../assets/folha.svg'
// import { color } from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: scroll;
  height: 100%;
`

export const ScrollBar = styled.div`
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const BoxBanner = styled.div`
  /* position: static; */
`

export const Image = styled.img`
  width: 100%;

  opacity: 0.9;
`

export const BoxCalc = styled.div`
  display: flex;
  /* margin-top: 100vh; */
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
