import { Form } from '@unform/web'
import styled, { keyframes } from 'styled-components'

import img1 from '../../../assets/arvore.png'

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  color: #fff;

  height: 100vh;
  width: 100vw;
  flex-direction: column;
  padding-bottom: 2rem;

  background-image: url(${img1});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
`

export const ContentForm = styled(Form)`
  width: 100vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`

export const button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  align-self: center;
  width: 20rem;
`

const appearFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px) scale(0.85) rotate(2deg); 
  }

  100% {
    opacity: 1;
    transform: translateX(0px) scale(1);

  }
`

export const BoxForm = styled.div`
  display: grid;
  width: 90vw;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-gap: 1rem 3rem;

  padding: 1rem 3rem;

  @media (max-width: 780px) {
    width: 80vw;
    padding: 0;
    align-items: center;
  }
  .end {
  }
`
export const Box1 = styled.div`
  animation: ${appearFromLeft} 1.5s;

  background-color: rgb(174, 174, 174, 0.6);
  padding: 4rem;
  border-radius: 5px;

  @media (max-width: 780px) {
    padding: 20px;
    width: 80vw;
  }
`

export const Box2 = styled.div``
