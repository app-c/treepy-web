import styled, { keyframes } from 'styled-components'
import { color } from '../../styles/colors'

export const Container = styled.div`
  width: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`

const anim = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const Box = styled.div`
  animation: ${anim} 1s;
  display: flex;
  flex-direction: column;
  padding: 3rem;

  border: 1px solid ${color.green[10]};

  transition: 0.7s;

  &:hover {
    background-color: rgba(72, 168, 34, 0.1);
  }
`

export const grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2rem;
`

export const Title = styled.h1`
  font-size: 1.5rem;
`

export const Content = styled.div`
  margin: 1rem 0;
`
