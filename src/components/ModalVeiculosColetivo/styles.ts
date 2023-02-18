import styled from 'styled-components'
import { color } from '../../styles/colors'

import * as Dialog from '@radix-ui/react-dialog'
import * as Select from '@radix-ui/react-select'

export const Container = styled.div``

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(70, 70, 70, 0.616);
`

export const ContentSelect = styled(Select.Content)`
  overflow: hidden;
  background-color: #891818;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`

export const Content = styled(Dialog.Content)`
  min-width: 20rem;
  padding: 1rem;
  background-color: #ffffffff;
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

export const ButtonAdd = styled.button`
  background-color: transparent;
  width: 14rem;
  border: 2px solid ${color.green[10]};
  border-radius: 10px;
  padding: 6px;
  color: #fff;
`

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10px;

  select {
    padding: 5px;
    border-radius: 4px;
    margin-top: 2rem;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    div {
      display: flex;
      align-items: center;

      h3 {
        font-weight: 300;
      }

      p {
        margin-left: 10px;
      }
    }

    .input {
      display: flex;
    }
  }
`

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  margin-top: 10px;

  margin-left: 10px;
`
export const ContentButton = styled.div`
  display: flex;
  width: 100%;

  .button {
    margin-top: 10px;
    width: 100%;
  }
`

export const Closed = styled(Dialog.Close)`
  width: 100%;
  background-color: transparent;
`

export const BoxSelect = styled.select`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;

  background-color: #fff;
  border: 0.8px solid ${color.green[10]};
`

export const Title = styled(Dialog.Title)`
  font-weight: 400;
  font-size: calc(0.5rem + 1vw);
`
