import styled from 'styled-components'
import Modal from 'react-modal'
import { color } from '../../styles/colors'

export type cor = 'sucess' | 'alert' | 'erro'

interface Props {
  type: cor
}

const variant = {
  sucess: '#599f48',
  alert: '#c6cf43',
  erro: '#b54545',
}

export const Container = styled(Modal)`
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #43434368;

  display: flex;
  flex-direction: column;
`

export const cotent = styled.div<Props>`
  background-color: ${(h) => variant[h.type]};
  width: calc(10rem + 20vw);
  border-radius: 5px;

  padding: 20px;
  display: flex;
  flex-direction: column;

  color: #fff;
`

export const title = styled.h3`
  margin-bottom: 2rem;
  margin-top: 1rem;
`

export const text = styled.p``

export const bt = styled.button`
  align-self: flex-end;
  padding: 4px 10px;
`
