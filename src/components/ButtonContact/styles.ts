import styled from 'styled-components'
import { color } from '../../styles/colors'

export const Container = styled.div`
  display: grid;
  background-color: ${color.dark[20]};

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: calc(20vw + 5rem);
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

  p {
    margin-bottom: 10px;
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
  padding: 5rem;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
  }

  @media (max-width: 1500px) {
    padding: 5rem 2rem;
  }
`
