import styled from 'styled-components'
import crianca from '../../assets/flor-1.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${crianca});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  position: relative;
  overflow: hidden;
  display: flex;
  z-index: 1;
  background-attachment: fixed;

  height: 65vw;

  color: #fff;

  align-items: center;
  justify-content: center;

  h1 {
    font-size: calc(2vw + 1rem);
    margin-bottom: 20px;
  }

  p {
    font-size: calc(1vw + 0.5rem);
    margin-bottom: 40px;
  }

  @media (max-width: 780px) {
    height: 30vh;
    background-size: 80vh;
  }

  h1 {
    font-size: calc(2vw + 40%);
    margin-bottom: 20px;
  }

  p {
    font-size: calc(1vw + 0.5rem);
    margin-bottom: 40px;
  }
`

export const bt = styled.div`
  width: calc(50px + 15vw);
  height: 50px;
`

export const content = styled.div``

export const box = styled.div`
  visibility: hidden;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`
