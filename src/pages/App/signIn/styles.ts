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

  width: calc(6rem + 40vw);

  background-color: rgba(102, 102, 102, 0.811);
  border-radius: 8px;

  box-shadow: 31px 24px 20px #b1b1b12a;

  @media (max-width: 780px) {
    width: calc(15rem + 30vw);
  }
`

export const button = styled.div`
  margin-top: 3rem;
  align-self: center;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ContentForm = styled(Form)`
  height: 100%;

  .buton {
  }
`
export const Li = styled(Link)`
  color: ${color.green[10]};
  align-self: flex-start;
  text-decoration: none;
  font-size: calc(60% + 1vh);
`

export const CreateAccont = styled.div`
  background-color: #e9e9e9;
  align-self: center;
  top: 90%;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;

  border-radius: 0 0 8px 8px;
  padding: 20px;

  font-size: calc(12px + 1vw);
`
