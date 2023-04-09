import styled from 'styled-components'
import { color } from '../../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  h1 {
  }
`

export const content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const title = styled.h1`
  /* margin-top: 8rem; */
  margin-bottom: 2rem;
  align-self: center;
`
export const BoxSelect = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 1rem 2rem;
`

export const box = styled.div`
  margin-top: 2rem;
`

export const BoxCard = styled.div``

export const BoxBoleto = styled.div``

export const BoxPix = styled.div``

export const BoxAss = styled.div``
