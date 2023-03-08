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
  background-color: ${color.green[10]};
  width: calc(70px + 10vw);
  text-decoration: none;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 10px;

  margin-top: 2rem;
  color: ${color.dark[30]};
`

export const content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 100vh;
  padding: 10px calc(20px + 10vw);

  h1 {
    color: ${color.green[40]};
  }

  p {
    margin-top: 1rem;
  }
`
