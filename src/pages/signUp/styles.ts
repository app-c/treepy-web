import { Form } from '@unform/web'
import styled, { keyframes } from 'styled-components'
import { color } from '../../styles/colors'

import img1 from '../../assets/arvore.png'

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  color: #fff;

  height: 100vh;
  width: 100vw;
  flex-direction: column;

  background-image: url(${img1});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContentForm = styled(Form)`
  width: 100vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  .buton {
    margin-top: 2rem;
    width: 95%;
    align-self: center;
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
export const Box1 = styled.div`
  background-color: rgb(174, 174, 174, 0.8);
  padding: 4rem;
  border-radius: 5px;
`

export const Box2 = styled.div``
