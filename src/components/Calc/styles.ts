import styled from 'styled-components'
import { color } from '../../styles/colors'
import { FiChevronRight } from 'react-icons/fi'

import calc from '../../assets/calc.svg'

export const box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  width: 100vw;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-template-rows: 30rem;

  @media (max-width: 850px) {
    grid-template-rows: 20rem;
  }

  @media (max-width: 850px) {
    grid-template-rows: 15rem;
  }
`

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.orange[20]};
  color: #fff;
  padding: 1rem;

  align-items: center;
  justify-content: center;

  div {
    width: calc(20rem + 16vw);

    h2 {
      color: #fff;
    }
  }
  p {
    font-size: calc(2vw + 10%);
    font-weight: 300;
  }

  @media (max-width: 850px) {
    div {
      width: 80%;
    }

    h2 {
      font-size: calc(3vw + 15%);
    }

    p {
      font-size: calc(2.4vw + 10%);
    }
  }

  @media (max-width: 450px) {
    div {
      width: 90%;
    }
  }
`

export const ContentButton = styled.div`
  display: flex;
  background-color: ${color.orange[10]};
  align-items: center;
  justify-content: center;

  background-image: url(${calc});
  background-repeat: no-repeat;
  background-position: 100%;
  background-size: 35%;

  .icon {
    position: relative;
    display: flex;
    flex-direction: row;
    left: -33%;
    z-index: 1;
    align-items: center;
    justify-content: center;

    @media (max-width: 1200px) {
      left: -30%;
    }

    @media (max-width: 450px) {
      left: -20px;
      z-index: 1;
    }
  }

  .buttom {
    display: flex;
    height: 3rem;
    border-radius: 5px;
    padding: 0 calc(0.5rem + 0.5vw);
    align-items: center;
    justify-content: center;
    background-color: ${color.green[40]};
    color: #fff;

    .linboton {
      color: #fff;
      text-decoration: none;
    }

    @media (max-width: 850px) {
      height: 4rem;
    }
  }

  @media (max-width: 800px) {
    background-size: 60%;
  }
`

export const Ico = styled(FiChevronRight)`
  margin-right: -2.5vw;
  font-size: 5vw;
  color: #fff;

  @media (min-width: 1500px) {
    font-size: 60px;
    margin-right: -25px;
  }

  @media (max-width: 950px) {
    font-size: 7vw;
    margin-right: -4vw;
  }

  @media (max-width: 780px) {
    font-size: 6vw;
    margin-right: -3vw;
  }

  @media (max-width: 450px) {
    font-size: 30px;
    margin-right: -18px;
  }
`
