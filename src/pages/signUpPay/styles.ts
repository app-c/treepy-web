import { Form } from '@unform/web'
import styled, { keyframes } from 'styled-components'
import { color } from '../../styles/colors'

export const Container = styled.div`
  flex: 1;
  display: flex;
  padding-bottom: 3rem;
  align-items: center;

  flex-direction: column;
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

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 0 1rem;
  }

  .buton {
    margin-top: 2rem;
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
  animation: ${appearFromLeft} 1s;
  display: flex;
  flex-direction: column;

  border: 1px solid ${color.green[10]};
  padding: 2rem;

  width: 40rem;
`
export const Box1 = styled.div``

export const box3 = styled.div``

export const Box2 = styled.div`
  display: flex;
  flex-direction: column;

  width: 70vw;
  align-self: center;
  padding: 2rem;
  border: 1px solid ${color.green[10]};

  margin-top: 10rem;

  h3 {
    margin-bottom: 2rem;
  }

  @media (max-width: 980px) {
    width: 90vw;
  }
`

export const box = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;

  @media (max-width: 980px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }

  grid-gap: 0 1rem;
  .marg {
  }
`

export const boxInp1 = styled.div``

export const boxIn2 = styled.div``
