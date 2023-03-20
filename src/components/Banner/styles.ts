import { Link } from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components'
import { color } from '../../styles/colors'

type cor = 'orange' | 'green'

interface PropsButton {
  variant: cor
}

const variant = {
  orange: color.orange[10],
  green: color.green[10],
}

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

export const slider = styled.div`
  color: #000;
  height: 100vh;

  align-items: center;

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: #000;
  }
`

export const arrow = styled.div`
  position: absolute;
  z-index: 200;

  top: 50%;
  left: 2vw;

  width: calc(3rem + 1vw);
  height: calc(3rem + 1vw);

  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 880px) {
  }
  @media (max-width: 880px) {
  }
`

export const dot = styled.div`
  border: none;
  width: 10px;
  height: 10px;
  background: #c5c5c5;
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;

  position: absolute;
  z-index: 200;

  top: 90%;
  left: 50%;

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: #000;
  }

  &:focus {
    outline: none;
  }

  &.active {
    background: #000;
  }
`

export const Container = styled.div`
  width: 100vw;
  display: flex;

  /* input {
    display: none;
    position: fixed;
  } */

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
    animation: ${ani} 20s;
    animation-timing-function: cubic-bezier(1, 0.25, 0.54, 1.28);
    animation-iteration-count: infinite;
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

  margin-top: 5rem;
`

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  padding: 0 1rem;

  .one {
    font-size: calc(12px + 2vw);
    margin-left: 7vw;
    width: 35rem;
    font-weight: 600;
    color: #fff;
    text-shadow: 0.04em 0 #343434;
  }

  @media (max-width: 780px) {
    align-items: center;
    justify-content: center;

    .one {
      margin-left: 0;
      width: 80%;
      text-align: start;
      font-size: calc(12px + 2vw);
    }
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
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 1rem;
  margin-left: 7vw;

  @media (max-width: 780px) {
    width: 80vw;
    justify-content: space-between;
  }
`
export const button = styled.button<PropsButton>`
  background-color: ${(h) => variant[h.variant]};
  color: #fff;
  padding: 10px 20px;
  width: 150px;
  height: 60px;
  text-decoration: none;

  align-items: center;
  justify-content: center;
`

export const link = styled(Link)`
  background-color: ${color.green[10]};
  padding: 15px 20px;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
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
