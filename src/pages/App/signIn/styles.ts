import { Form } from '@unform/web'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { color } from '../../../styles/colors'
import img2 from '../../../assets/img2.jpeg'

export const Container = styled.div`
  display: flex;

  height: 100vh;
  /* background-color: red; */
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url(${img2});
  background-repeat: no-repeat;
  background-size: cover;

  background-position: 50%;
`

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-55%)
  }

  to {
    opacity: 1;
    transform: translateX(-50%)
  }
`

export const Content = styled.div`
  animation: ${appearFromLeft} 1s;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  h2 {
    color: #fff;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  top: 20%;

  transform: translate(-50%);

  padding: 0 3rem;

  width: calc(6rem + 20vw);

  background-color: #cdcdcd88;
`

export const button = styled.div`
  margin-top: 3rem;
  align-self: center;
  width: 100%;
`

export const ContentForm = styled(Form)`
  height: 100%;

  .buton {
  }
`
export const Li = styled(Link)`
  color: ${color.orange[20]};
  align-self: flex-start;
  text-decoration: none;
  font-size: calc(60% + 1vh);
`

export const CreateAccont = styled.div`
  background-color: #fff;
  align-self: center;
  top: 90%;
  width: calc(6rem + 20vw);

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;

  padding: 20px;

  font-size: calc(12px + 1vw);
`
