import styled from 'styled-components'
import { color } from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.dark[30]};
  border: 2px solid ${color.green[10]};
  border-radius: 5px;
  height: 9rem;
  width: 18rem;

  padding: 1rem;
`

export const Bandeira = styled.div`
  align-self: flex-end;

  font-weight: bold;
  color: #fff;
`

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;

  font-weight: 500;
  p {
    margin: 4px 0;
  }

  div {
    display: flex;
    width: 60%;
    justify-content: space-between;
  }
`
