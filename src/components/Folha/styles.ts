import styled from 'styled-components'
import folha from '../../assets/folha.svg'
import folha1 from '../../assets/folha1.svg'
import folha2 from '../../assets/folha2.svg'
import folha3 from '../../assets/folha3.svg'

export const Box = styled.div`
  background-color: #fff;
  /* padding: 20px 30px; */
  height: 100vh;
  justify-content: center;
  align-items: center;

  @media (max-width: 780px) {
    padding: 10px;
  }
`

export const BoxFolha = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

export const ContentTextFolha = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 5rem; */
  padding: 0 8rem;

  div {
    display: flex;

    align-items: center;

    img {
      width: 50px;
    }

    .title {
      font-weight: 600;
      font-size: 2rem;
      margin-left: 20px;

      @media (max-width: 780px) {
        font-size: 1.5rem;
      }
    }
  }

  .line {
    height: 3px;
    width: 100%;
    background-color: #1c1c1c;
    margin-bottom: 20px;
    margin-top: 5px;
  }
  @media (max-width: 780px) {
    margin-bottom: 2rem;
    padding: 0 20px;

    .title {
      font-size: 1rem;
    }
  }
`

export const BoxGridFolha = styled.div`
  padding: 0 10rem;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 2rem;

  @media (max-width: 780px) {
    padding: 0;
  }

  /* .folha1 {
    display: flex;
    justify-content: center;
    background-image: url(${folha});
    background-size: contain;
    align-items: center;

    background-repeat: no-repeat;

    flex-direction: column;
    padding: 10%;

    width: 100%;
    height: 100%;

    &:hover {
      top: -20px;
    }

    h3 {
      color: #fff;
      text-align: center;
      font-weight: 500;
      font-size: 1.2rem;
    }

    p {
      color: #fff;
      margin-top: 20px;
      text-align: center;
    }

    @media (max-width: 780px) {
      width: 10rem;
      height: 15rem;
      padding: 10px;

      h3 {
        font-size: 0.8rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  } */

  .folha2 {
    display: flex;
    justify-content: center;
    background-image: url(${folha1});
    background-size: contain;

    background-repeat: no-repeat;

    flex-direction: column;
    padding: 50px;

    width: 100%;
    height: 100%;

    h3 {
      color: #fff;
      text-align: center;
      font-weight: 500;
      font-size: 1.2rem;
    }

    p {
      color: #fff;
      margin-top: 20px;
      text-align: center;
    }

    @media (max-width: 780px) {
      width: 10rem;
      height: 15rem;
      padding: 10px;

      h3 {
        font-size: 0.8rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }

  .folha3 {
    display: flex;
    justify-content: center;
    background-image: url(${folha2});
    background-size: contain;

    background-repeat: no-repeat;

    flex-direction: column;
    padding: 50px;

    width: 100%;
    height: 100%;

    h3 {
      color: #fff;
      text-align: center;
      font-weight: 500;
      font-size: 1.2rem;
    }

    p {
      color: #fff;
      margin-top: 20px;
      text-align: center;
    }

    @media (max-width: 780px) {
      width: 10rem;
      height: 15rem;
      padding: 10px;

      h3 {
        font-size: 0.8rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }

  .folha4 {
    display: flex;
    justify-content: center;
    background-image: url(${folha3});
    background-size: contain;

    background-repeat: no-repeat;

    flex-direction: column;
    padding: 50px;

    width: 100%;
    height: 100%;

    h3 {
      color: #fff;
      text-align: center;
      font-weight: 500;
      font-size: 1.2rem;
    }

    p {
      color: #fff;
      margin-top: 20px;
      text-align: center;
    }

    @media (max-width: 780px) {
      width: 10rem;
      height: 15rem;
      padding: 10px;

      h3 {
        font-size: 0.8rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }
`

export const ContentFolha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(15vh + 9.4vw);
  height: calc(15vh + 15vw);

  transition: 0.4s;

  &:hover {
    width: calc(20vh + 10vw);
    height: calc(18vh + 16vw);
  }

  @media (max-width: 780px) {
    margin-bottom: 20px;
  }
`

export const ContainerFolha = styled.div`
  background-color: red;
  /* height: 10rem; */
`
