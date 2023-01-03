import styled from 'styled-components'
import folha from '../../assets/folha.svg'
import folha1 from '../../assets/folha1.svg'
import folha2 from '../../assets/folha2.svg'
import folha3 from '../../assets/folha3.svg'
import { color } from '../../styles/colors'

export const Box = styled.div`
  background-color: #fff;
  padding: 20px 30px;
  padding-bottom: 5rem;

  @media (max-width: 780px) {
    padding: 10px;
  }
`

export const BoxFolha = styled.div``

export const ContentTextFolha = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  padding: 0 8rem;

  div {
    display: flex;

    align-items: center;

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
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

  @media (max-width: 780px) {
    padding: 0;
  }

  .folha1 {
    display: flex;
    justify-content: center;
    background-image: url(${folha});
    background-size: contain;

    background-repeat: no-repeat;

    flex-direction: column;
    padding: 50px;

    width: 20rem;
    height: 25rem;

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
  }

  .folha2 {
    display: flex;
    justify-content: center;
    background-image: url(${folha1});
    background-size: contain;

    background-repeat: no-repeat;

    flex-direction: column;
    padding: 50px;

    width: 20rem;
    height: 25rem;

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

    width: 20rem;
    height: 25rem;

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

    width: 20rem;
    height: 25rem;

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
`

export const ContentFolha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 780px) {
    margin-bottom: 20px;
  }
`
