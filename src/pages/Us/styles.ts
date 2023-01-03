import styled from 'styled-components'
import fundus from '../../assets/fundoUs.png'

export const Container = styled.div`
  background-image: url(${fundus});
  background-repeat: no-repeat;
  background-size: cover;

  height: 30vw;
  width: 100vw;

  display: flex;
  flex-direction: column;

  align-items: center;

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    color: #fff;

    h1 {
      font-size: calc(2.5vw + 2rem);
      font-weight: 600;
    }

    p {
      font-weight: 300;
      opacity: 0.9;
      font-style: italic;
      font-size: calc(1vw + 0.5rem);
    }
  }
`

export const Content = styled.div``
