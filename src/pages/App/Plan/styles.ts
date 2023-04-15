import styled from 'styled-components'
import { color } from '../../../styles/colors'
import { Link } from 'react-router-dom'

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
  width: 100%;
  padding: 2rem;
`

export const grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
`

export const metodo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`

export const preview = styled.div`
  width: calc(20rem + 20vw);
  align-self: center;
`

export const BoxCard = styled.div`
  width: calc(20rem + 20vw);
  align-self: center;
  margin-top: 2rem;
`

export const BoxBoleto = styled.div``

export const BoxPix = styled.div``

export const BoxAss = styled.div``

export const boxSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BoxInput = styled.div``

export const gridInput = styled.div`
  display: flex;
  width: 100%;
`

export const installments = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 3px;
  }
`

export const boxSelection = styled.select`
  width: 100%;
  height: 2.4rem;
  /* padding: 1rem 2rem; */
  display: flex;
  font-size: calc(0.4rem + 0.5vw);
  color: ${color.dark[20]};

  /* background-color: #fff; */
  border: 0.8px solid ${color.dark[40]};
  border-radius: 5px;
`

export const typePay = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`

export const boxSignIn = styled.div`
  width: 50%;
  align-self: center;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  @media (max-width: 450px) {
    width: 100%;
  }
`

export const titleSignIn = styled.h2`
  text-align: center;
  margin-bottom: 2rem;

  color: #fff;
`

export const link = styled(Link)`
  align-self: flex-start;

  margin-bottom: 2rem;
  color: ${color.green[10]};

  text-decoration: none;
`
