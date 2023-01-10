import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { color } from '../../styles/colors'

export const Container = styled.div``

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(26, 26, 26, 0.859);
`

export const Content = styled(Dialog.Content)`
  padding: 1rem;
  background-color: ${color.green[20]};
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  align-items: center;
  justify-content: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const Closed = styled(Dialog.Close)``

export const BoxContent = styled.div`
  width: 80vw;
`

export const Button = styled.button``

export const Botao = styled.button`
  border: none;
  background-color: ${color.green[10]};
  width: 35%;
  padding: 3%;
  border-radius: 25px;

  color: #fff;
  font-size: 1.3rem;

  align-self: center;
  margin-top: 6rem;
`

export const Bt = styled.button`
  width: 6rem;
  height: 3rem;
  border-radius: 5px;
  background-color: ${color.green[30]};
`
