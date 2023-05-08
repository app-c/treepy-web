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
`

export const subTitle = styled.p`
  font-size: clamp(18px, 2vw, 1.9vw);
  font-weight: 600;
  color: ${color.green[30]};
  margin-top: 20px;
`

export const boxC = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const button = styled(Link)`
  display: flex;
  background-color: ${color.orange[10]};
  width: calc(6rem + 12vw);
  text-decoration: none;
  border-radius: 20px;
  align-items: center;
  justify-content: center;

  padding: 14px;

  margin-top: 2rem;
  color: ${color.dark[30]};

  &:hover {
    opacity: 0.94;
  }
`

export const titleBt = styled.p`
  color: ${color.green[10]};
  text-align: center;
  font-size: calc(8px + 1vw);
`
