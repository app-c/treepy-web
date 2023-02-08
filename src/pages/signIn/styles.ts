import { Form } from '@unform/web'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { color } from '../../styles/colors'
import img2 from '../../assets/img2.jpeg'

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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50vw;

  /* grid-gap: 1rem 2rem; */
`

export const BoxLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(
    to right,
    rgb(255, 255, 255) 0,
    #415225 80%,
    #26350e 100%
  );
  /* background-color: linear-gradient(90deg, #fdfaf4 0%, #26350e 100%); */
  .logo {
    width: 60vh;
  }
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

const appearFromLeft = keyframes`
  form {
    opacity: 0;
    transform: translateX(-50px)
  }

  form {
    opacity: 1;
    transform: translateX(0px)
  }
`

export const AnimetedForm = styled.div`
  width: 100%;
  height: 100%;

  animation: ${appearFromLeft};
`

export const BoxForm = styled.div`
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
