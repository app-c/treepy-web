import styled from 'styled-components'
import { color } from '../../styles/colors'

export const Container = styled.div`
  display: grid;
  background-color: ${color.dark[20]};

  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: calc(35vw + 5rem);
  color: #fff;

  @media (max-width: 980px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`

export const BoxDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem;

  p {
    margin-top: 30px;
    font-size: 1.2rem;
  }

  @media (max-width: 780px) {
    padding: 1rem;
    margin-top: 1px;
  }
`

export const BoxContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem;

  div {
    display: flex;
    margin-top: 1rem;

    strong {
      margin-left: 20px;
    }
  }

  @media (max-width: 1500px) {
    padding: 1rem;
  }
`

export const BoxMidia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10rem;

  @media (max-width: 1500px) {
    padding: 5rem 2rem;
  }
`
