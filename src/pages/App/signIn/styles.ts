import { Form } from '@unform/web'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { color } from '../../../styles/colors'
import img2 from '../../../assets/img2.jpeg'

export const Container = styled.div`
  flex: 1;
  display: flex;

  height: 100vh;
  /* background-color: red; */
  flex-direction: column;
  align-items: center;

  background-image: url(${img2});
  background-repeat: no-repeat;
  background-size: cover;

  background-position: 50%;
`

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40%)
  }

  to {
    opacity: 1;
    transform: translateX(-50%)
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50vw;

  /* grid-gap: 1rem 2rem; */
`

export const ContentForm = styled(Form)`
  height: 100%;

  .buton {
    margin-top: 3rem;
    align-self: center;
    width: 100%;
  }

  .inputs {
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`

export const BoxForm = styled.div`
  animation: ${appearFromLeft} 2s;
  position: absolute;
  /* width: 100%; */
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #cdcdcd79;
  border-radius: 10px;

  top: 20%;

  transform: translate(-50%);

  padding: 0 3rem;

  .end {
    margin-top: 1rem;
  }

  h1 {
    color: #fff;
    margin-bottom: 2rem;
    font-size: calc(1vw + 2.5vh);
  }
`

export const Li = styled(Link)`
  color: ${color.green[10]};
  align-self: flex-start;
  text-decoration: none;
  font-size: calc(60% + 1vh);
`

export const CreateAccont = styled.div`
  background-color: #fff;
  position: fixed;
  align-self: center;
  top: 90%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  font-size: calc(12px + 1vw);
`
