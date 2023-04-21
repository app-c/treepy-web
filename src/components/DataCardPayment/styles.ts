import styled from 'styled-components'
import { color } from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const preview = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const box = styled.div``

export const gridInput = styled.div`
  display: flex;
`

export const installments = styled.div``

export const boxSelection = styled.select`
  width: 100%;
  height: 2.4rem;
  display: flex;
  font-size: calc(0.4rem + 0.5vw);
  color: ${color.dark[20]};

  border: 0.8px solid ${color.dark[40]};
  border-radius: 5px;
`
