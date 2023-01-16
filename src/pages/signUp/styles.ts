import { Form } from '@unform/web'
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
  display: grid;
  height: 100%;
  align-items: center;
  justify-content: center;

  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
  width: 100%;
  margin-top: 5rem;

  .buton {
    margin-top: 3rem;
  }

  .content {
    display: flex;
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${color.green[20]};

  padding: 0 3rem;

  .end {
    margin-top: 2rem;
  }
`
