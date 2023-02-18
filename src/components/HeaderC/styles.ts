import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { color } from '../../styles/colors'

export const Container = styled.div`
  width: 100vw;
  padding: 2rem;
  /* position: absolute; */
`

export const box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const logoBox = styled.div`
  width: calc(5rem + 5vw);
  background-color: rgb(202, 202, 202, 0.8);
  padding: 10px;
  border-radius: 5px;
`

export const boxAccount = styled.div`
  background-color: ${color.green[30]};

  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(5vw + 50px);
  height: calc(2.5vw + 30px);
  padding: 10px;
  border-radius: 5px;
`

export const buttonAccount = styled(Link)`
  text-decoration: none;
  text-align: center;

  color: #fff;

  font-size: calc(0.8vw + 8px);
`
