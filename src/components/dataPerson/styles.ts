import styled from 'styled-components'
import { color } from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;

  color: #fff;

  padding: 2rem;
  border-radius: 10px;
  border: 1px solid ${color.green[10]};

  h1 {
    margin-bottom: 1rem;
  }
`

export const Bttom = styled.button``

export const Content = styled.div`
  display: grid;
  width: 70vw;
  align-items: center;
  grid-gap: 6rem;

  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  .person {
    align-self: stretch;
  }

  .localy {
    align-self: stretch;
  }
`
