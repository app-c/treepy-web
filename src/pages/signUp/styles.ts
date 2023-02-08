import { Form } from '@unform/web'
import styled, { keyframes } from 'styled-components'
import { color } from '../../styles/colors'

import img1 from '../../assets/img1.jpeg'

export const Container = styled.div`
  flex: 1;
  display: flex;

  height: 100vh;
  flex-direction: column;

  background-image: url(${img1});

  background-repeat: no-repeat;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
`

export const ContentForm = styled(Form)`
  display: flex;
  flex-direction: column;
  .buton {
    margin-top: 2rem;
    width: 90vw;
    align-self: center;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 0 1rem;
  }
`

const appearFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px) scale(0.95) rotate(1deg);
  }

  100% {
    opacity: 1;
    transform: translateX(0px) scale(1);

  }
`

export const BoxForm = styled.div`
  animation: ${appearFromLeft} 0.4s;
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-gap: 0 3rem;

  padding: 0 3rem;

  .end {
  }
`
export const Box1 = styled.div``

export const Box2 = styled.div``
