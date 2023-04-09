import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { color } from '../../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;

  h1 {
    margin-bottom: 20px;
  }
`

export const button = styled(Link)`
  display: flex;
  background-color: ${color.orange[10]};
  width: calc(70px + 15vw);
  text-decoration: none;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-left: 4rem;

  padding: 15px;

  margin-top: 2rem;
  color: ${color.dark[30]};
`

export const text = styled.p`
  font-size: clamp(16px, 2vw, 1.5vw);
  margin-top: 1rem;
  color: ${color.green[30]};
`

export const content = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  padding: 10px calc(20px + 10vw);

  h1 {
    color: ${color.green[10]};
  }
`

export const titleBt = styled.p`
  color: ${color.green[10]};
  text-align: center;
  font-size: calc(14px + 1vw);
`

export const subTitle = styled.p`
  font-size: clamp(18px, 2vw, 1.9vw);
  font-weight: 600;
  color: ${color.green[30]};
  margin-top: 20px;
`

export const boxRow = styled.div`
  display: flex;

  align-items: center;
`
