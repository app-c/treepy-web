import { Form } from '@unform/web'
import styled from 'styled-components'
import { color } from '../../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
`

export const content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: 30px;

  h1 {
    margin-bottom: 1rem;
    color: ${color.green[30]};
    font-size: clamp(20px, 2.5vw, 3vw);
  }
`

export const text = styled.p`
  margin-top: 20px;
  width: calc(20rem + 25vw);
  font-size: clamp(16px, 2vw, 1.5vw);
  /* text-align: center; */

  span {
    color: ${color.dark[10]};
    font-weight: 600;
  }

  @media (max-width: 750px) {
    width: calc(20rem + 10vw);
  }
`

export const form = styled(Form)`
  display: flex;
  flex-direction: column;
`

export const boxForm = styled.div`
  width: 80vw;
  padding: 30px;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 0.7fr));

  grid-gap: 2rem;
`

export const area = styled.textarea`
  height: 100%;
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid ${color.dark[30]};
`

export const box1 = styled.div`
  display: flex;
  flex-direction: column;
`

export const box2 = styled.div`
  background-color: #4a4a4a;
`

export const bt = styled.button`
  align-self: center;
  align-items: center;

  background-color: ${color.green[10]};
  padding: 5px 10px;
  width: 10rem;
`
