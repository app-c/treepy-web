import styled from 'styled-components'
import fundus from '../../assets/fundoUs.png'

export const Container = styled.div`
  background-image: url(${fundus});
  background-repeat: no-repeat;
  background-size: cover;

  height: 50vw;
  width: 100vw;

  display: flex;
  flex-direction: column;

  align-items: center;

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;

    color: #fff;

    h1 {
      font-size: clamp(2rem, 6vw, 10vw);
      font-weight: 600;
    }

    p {
      font-weight: 300;
      opacity: 0.9;
      font-style: italic;
      font-size: clamp(0.5rem, 3vw, 2rem);
    }
  }

  @media (max-width: 780px) {
    height: 40vh;
  }
`

export const Content = styled.div``
