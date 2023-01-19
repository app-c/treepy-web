import styled from 'styled-components'
import mao from '../../assets/mao.png'

export const Container = styled.div`
  background-color: #e3e3e3;
  width: 100vw;

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(620px, 1fr));
  grid-template-rows: 40vw;

  @media (max-width: 920px) {
    grid-template-columns: repeat(auto-fit, minmax(410px, 1fr));
  }
`

export const Title = styled.h2``

export const ContentImage = styled.div`
  /* height: 10vw; */
  background-image: url(${mao});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  /* @media (max-width: 1920px) {
    height: 25rem;
  } */
`

export const ContentText = styled.div`
  background-color: #fff;
  padding: 0 4vw;

  .header {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h1 {
      font-weight: 600;
      font-size: calc(3vw + 20%);
    }

    p {
      font-size: calc(1vw + 10%);
    }

    line {
      height: 2px;
      width: 100%;
      background-color: #202020;
    }

    /* @media (max-width: 1920px) {
      h1 {
        font-size: 3vw;
        margin-top: 20px;
      }

      p {
        font-size: 1vw;
      }
    } */

    @media (max-width: 1200px) {
      h1 {
        margin-top: 1rem;
        font-size: calc(1vw + 1.8rem);
      }

      p {
        font-size: calc(0.5vw + 1rem);
      }
    }
  }

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
    /* width: 100vw; */

    padding: 10px;

    div {
      /* margin-bottom: 1px; */
    }

    /* @media (max-width: 1080px) {
      width: 50vw;
    } */
  }

  .contact {
    display: flex;
    align-items: center;
    margin-top: 1vh;
    justify-content: space-between;

    .logo {
      width: calc(4vw + 5.5rem);
      margin-right: 10%;
    }

    h1 {
      color: #44bf17;
      font-weight: 600;
      font-size: calc(2vw + 35%);
      margin-left: calc((-1vw) + (1rem));
    }
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
    font-size: calc(1vw + 0.5rem);
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
