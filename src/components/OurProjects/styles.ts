import styled from 'styled-components'
import mao from '../../assets/mao.jpg'
import { color } from '../../styles/colors'

export const box = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Container = styled.div`
  background-color: #e3e3e3;
  width: 100vw;

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  grid-template-rows: 40vw;

  /* @media (max-width: 920px) {
    grid-template-columns: repeat(auto-fit, minmax(410px, 1fr));
  } */
`

export const cHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-weight: 600;
    /* font-size: calc(2vw + 2vh); */
  }

  line {
    height: 2px;
    width: 100%;
    background-color: #202020;
  }
`

export const Title = styled.h2``

export const ContentImage = styled.div`
  /* height: 10vw; */
  background-image: url(${mao});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 760px) {
    width: 100vw;
  }
`

export const ContentText = styled.div`
  background-color: #fff;
  padding: 0 4vw;

  @media (max-width: 820px) {
    width: 100vw;
    .header {
      align-items: center;
      justify-content: center;

      h1 {
        margin-top: 1rem;
        font-size: calc(1vw + 1.5rem);
      }

      p {
        font-size: calc(0.5vw + 0.8rem);
      }
    }
  }

  .content {
    padding: 10px;
    margin-top: 3rem;
  }
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-top: calc(1vh + 1rem);

  .folha1 {
    width: 1.5rem;
  }

  .folha {
    width: 2rem;
  }
`

export const BoxText = styled.div`
  margin-left: 20px;

  h3 {
    font-weight: 600;
    font-size: calc(1vw + 0.2rem);
  }

  p {
    font-size: calc(1vw + 0.1rem);
  }

  @media (max-width: 700px) {
    h3 {
      font-size: calc(1vw + 0.8rem);
    }

    p {
      font-size: calc(1vw + 0.5rem);
    }
  }
`
export const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1vh;
  justify-content: space-between;

  h4 {
    color: #44bf17;
    font-weight: 600;
    margin-top: 2rem;
  }
`

export const buton = styled.button`
  background-color: ${color.green[10]};
  padding: 10px 15px;
  border-radius: 30px 0 30px 0;
`
