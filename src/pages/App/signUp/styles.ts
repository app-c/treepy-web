import { Form } from '@unform/web'
import styled, { keyframes } from 'styled-components'

import img1 from '../../../assets/arvore.png'
import { color } from '../../../styles/colors'

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

  h1 {
    color: ${color.dark[40]};
  }
`
export const content = styled.div`
  width: calc(20vw + 400px);
  background-color: rgba(255, 255, 255, 0.371);

  padding: 20px;
  border-radius: 10px;
  box-shadow: 8px 4px 3px rgba(93, 93, 93, 0.469);

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`

export const boxRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const boxComponents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
`

export const boxInput = styled.div`
  display: flex;
`

export const box = styled.div`
  margin-left: 10px;
`
