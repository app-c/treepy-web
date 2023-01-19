import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'
import { color } from '../../styles/colors'

export const Container = styled.div``

export const Overlay = styled(Dialog.Overlay)`
  position: absolute;
  width: 100vw;
  height: 200vh;
  inset: 0;
  background-color: rgba(26, 26, 26, 0.859);
  z-index: 20;
`

export const Content = styled(Dialog.Content)`
  padding: 1rem;
  background-color: ${color.green[30]};
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  height: 80vh;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 25;
`
export const Closed = styled(Dialog.Close)``

export const BoxContent = styled.div`
  overflow: scroll;
  width: 100vw;
`

export const Button = styled.button``

export const Botao = styled.button`
  border: none;
  background-color: ${color.green[10]};
  width: 100%;
  padding: 4%;
  height: 100%;
  border-radius: 25px;

  color: #fff;
  font-size: 100%;

  align-self: center;
`

export const Bt = styled.button`
  width: 6rem;
  height: 3rem;
  border-radius: 5px;
  background-color: ${color.green[30]};
`
