import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { color } from '../../styles/colors'

export const Container = styled.div`
  width: 100vw;
  /* padding: 1rem; */
  /* position: absolute; */
  background-color: rgba(74, 136, 79, 0.3);
  margin-bottom: 2rem;
`

export const box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

export const logoBox = styled.div`
  width: calc(5rem + 4vw);
  padding: 10px;
  border-radius: 5px;
  margin-left: 3vw;
`

export const boxAccount = styled.div`
  background-color: ${color.green[30]};

  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(5vw + 50px);
  height: 100%;
  padding: 10px;
  border-radius: 5px;
`

export const buttonAccount = styled(Link)`
  text-decoration: none;
  text-align: center;

  color: #fff;

  font-size: calc(0.8vw + 8px);
`
