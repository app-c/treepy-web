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
export const subtitle = styled.h4`
  /* margin-top: 8rem; */
  margin-bottom: 1rem;
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2rem calc(2rem + 5vw);
`

export const gridMethod = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem calc(1rem + 2vw);

  margin-bottom: 2rem;
`

export const boxData = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${color.green[10]};

  border-radius: 6rem;
  padding: 2rem calc(10px + 2vw);
`

export const BoxBoleto = styled.div``

export const BoxPix = styled.div``

export const BoxAss = styled.div``

export const gridInput = styled.div`
  display: flex;
  align-items: center;
`

export const BoxInput = styled.div``

export const boxSelect = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`

export const boxMethod = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const typePay = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem auto;
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

export const boxBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;
`

export const conten = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const bxForgot = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
`

export const link = styled(Link)`
  text-decoration: none;
  color: #fff;
`
