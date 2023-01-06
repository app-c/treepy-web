import styled from 'styled-components'
import { color } from '../../styles/colors'
import { FiChevronRight } from 'react-icons/fi'

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
    /* background-color: red; */
    width: 80%;
  }

  h2 {
    font-size: 3.5vw;
  }

  p {
    font-size: 1.7vw;
  }

  /* @media (max-width: 1500px) {
    div {
      width: 80%;
    }

    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.4rem;
    }
  } */

  @media (max-width: 850px) {
    div {
      width: 80%;
    }

    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 450px) {
    div {
      width: 90%;
    }

    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`

export const ContentButton = styled.div`
  display: flex;
  background-color: ${color.orange[10]};
  align-items: center;
  justify-content: center;

  .icon {
    position: relative;
    display: flex;
    flex-direction: row;
    left: -17vw;
    z-index: 1;

    @media (max-width: 1500px) {
      left: -13vw;
    }

    @media (max-width: 950px) {
      left: -10vw;
    }

    @media (max-width: 780px) {
      left: -18vw;
    }

    @media (max-width: 450px) {
      left: -55px;
      z-index: 1;
    }
  }

  .buttom {
    display: flex;
    height: 6rem;
    background-color: red;
    margin-left: 1vw;

    @media (max-width: 850px) {
      margin-left: -10%;
      height: 4rem;
    }
  }
`

export const Ico = styled(FiChevronRight)`
  margin-right: -2.5vw;
  font-size: 5vw;
  color: #fff;

  /* @media (max-width: 1500px) {
    font-size: 60px;
    margin-right: -20px;
  } */

  @media (max-width: 950px) {
    font-size: 7vw;
    margin-right: -2.5vw;
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
