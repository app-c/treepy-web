import styled, { css, keyframes } from 'styled-components'
import { color } from '../../styles/colors'

interface PropsSlide {
  pag: string
}

const ani = keyframes`
  20% {
    margin-left: 0;
  }

  40% {
    margin-left: -33.5%;

  }

  60% {
    margin-left: -33.5%;

  }

  80% {
    margin-left: -66.7%;

  }

  95% {
    margin-left: -66.7%;

  }


  100% {
    margin-left: 0;
  }
`

export const Container = styled.div<PropsSlide>`
  width: 100vw;
  overflow: hidden;

  display: flex;

  input {
    display: none;
    position: fixed;
  }

  .ico1 {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 3%;

    @media (max-width: 450px) {
      top: 20%;
    }
  }

  .ico2 {
    position: absolute;
    z-index: 2;
    top: 50%;
    right: 3%;

    @media (max-width: 450px) {
      top: 20%;
    }
  }

  .slides {
    display: flex;
    width: 300%;
  }

  .slide {
    width: 100vw;
    transition: 3s;
  }

  #slide1:checked ~ .s1 {
    animation: ${ani} 14s;
    animation-iteration-count: infinite;
    margin-left: ${(h) => h.pag};
  }

  /* #slide2:checked ~ .s1 {
    margin-left: -33.5%;
  }

  #slide3:checked ~ .s1 {
    margin-left: -66.7%;
  } */

  .navigation {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
  }
`

export const Label = styled.label<PropsSlide>`
  width: 25px;
  height: 25px;
  border-radius: 13px;
  background-color: #ffffff79;
  margin: 15px;
  transition: 0.4s;
  border: 1px solid #fff;

  ${(props) =>
    props.pag &&
    css`
      background-color: #fff;
    `}

  cursor: pointer;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: #3a2a2a;
  height: 100vh;
  background-position: 50%;
  transform: translate(-50);
  position: relative;

  p {
    color: #fff;
  }

  @media (max-width: 780px) {
    height: 40vh;
  }
`

export const BoxElement = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  margin-top: 7rem;
`

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  /* background-color: red; */
  padding: 0 1rem;

  .one {
    font-size: calc(4vw + 40%);
    margin-left: 10vw;
  }
  .two {
    margin-left: 10vw;
    font-size: calc(5vw + 40%);
  }
  .tree {
    margin-left: 10vw;
    font-size: calc(5vw + 30%);
    font-weight: 600;
  }
`

export const BoxIco = styled.button`
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  /* background-color: red; */

  @media (max-width: 780px) {
  }
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(30vw + 4rem);
  height: calc(5vw + 3rem);
  margin-top: 1rem;
  margin-left: 10vw;

  .b1 {
    width: calc(5vw + 15%);
    height: calc(3vw + 20%);

    button {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      background-color: ${color.orange[10]};

      align-items: center;
      justify-content: center;

      color: #fff;
    }
  }
  .b2 {
    width: calc(5vw + 15%);
    height: calc(3vw + 20%);

    button {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      background-color: ${color.green[10]};

      align-items: center;
      justify-content: center;

      color: #fff;
    }
  }

  @media (max-width: 780px) {
    width: 14rem;
    height: 3rem;

    .b1 {
      width: calc(5vw + 5rem);
      height: calc(3vw + 1.6rem);

      button {
        width: 100%;
        height: 100%;
        border-radius: 6px;
        background-color: ${color.orange[10]};

        align-items: center;
        justify-content: center;

        color: #fff;
      }
    }
    .b2 {
      width: calc(5vw + 5rem);
      height: calc(3vw + 1.6rem);

      button {
        width: 100%;
        height: 100%;
        border-radius: 6px;
        background-color: ${color.green[10]};

        align-items: center;
        justify-content: center;

        color: #fff;
      }
    }
  }
`

export const Boxtest = styled.div`
  height: 100vh;
`

export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100vw;
  height: 50vw;
  background-color: red;
`
