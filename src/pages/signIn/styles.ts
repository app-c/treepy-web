import { Form } from '@unform/web'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { color } from '../../styles/colors'

export const Container = styled.div`
  flex: 1;
  display: flex;

  height: 100vh;
  /* background-color: red; */
  flex-direction: column;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
    /* background-color: red; */
    width: 100%;
  }

  .inputs {
    /* background-color: red; */
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
  width: 50rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 3rem;

  .end {
    margin-top: 2rem;
  }

  h1 {
    color: #fff;
    margin-bottom: 2rem;
  }
`

export const Li = styled(Link)`
  color: ${color.orange[10]};
  align-self: flex-start;
  text-decoration: none;
  font-size: calc(60% + 1vh);
`
