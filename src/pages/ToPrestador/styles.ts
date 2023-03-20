import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { color } from '../../styles/colors'

export const Container = styled.div``

export const contetn = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  margin-left: calc(2rem + 2vw);
`

export const title = styled.h1`
  margin-bottom: 2rem;
`

export const subTitle = styled.p`
  font-size: clamp(16px, 2vw, 1.5vw);
  color: ${color.green[30]};
  width: 60%;

  @media (max-width: 820px) {
    width: 90%;
  }

  & + p {
    margin-top: 1rem;
  }
`
export const button = styled(Link)`
  display: flex;
  background-color: ${color.orange[10]};
  width: calc(8rem + 12vw);
  text-decoration: none;
  border-radius: 20px;
  align-items: center;
  justify-content: center;

  padding: 15px;

  margin-top: 2rem;
  color: ${color.dark[30]};
`

export const titleBt = styled.p`
  color: ${color.green[10]};
  text-align: center;
  font-size: calc(16px, 2vw);
`
