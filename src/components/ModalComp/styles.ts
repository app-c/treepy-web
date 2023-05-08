import styled from 'styled-components'
import { color } from '../../styles/colors'
import Modal from 'react-modal'

export const modal = styled(Modal)`
  background-color: rgba(27, 27, 27, 0.73);
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  width: 50vw;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 450px) {
    width: 90vw;
    height: 50vh;
  }

  display: flex;
  flex-direction: column;

  background-color: #bdbdbd;
  border-radius: 10px;
  padding: 2rem;
`

export const closed = styled.button`
  width: 40px;
  height: 40px;

  border-radius: 30px;
  background-color: ${color.red[10]};
  align-self: flex-end;
`
