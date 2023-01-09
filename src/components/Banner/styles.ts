import styled from 'styled-components'
import { color } from '../../styles/colors'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

export const Container = styled.div``

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: #3a2a2a;
  height: 100vh;
  background-position: 50% 0%;
  position: relative;

  p {
    color: #fff;
  }

  @media (max-width: 780px) {
    height: 40vh;
  }
`

export const BoxElement = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  margin-top: 7rem;
`

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  /* background-color: red; */
  padding: 0 1rem;

  .one {
    font-size: calc(4vw + 40%);
    margin-left: 10vw;
  }
  .two {
    margin-left: 10vw;
    font-size: calc(5vw + 40%);
  }
  .tree {
    margin-left: 10vw;
    font-size: calc(5vw + 30%);
    font-weight: 600;
  }
`

export const BoxIco = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: red; */

  @media (max-width: 780px) {
  }
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(30vw + 4rem);
  height: calc(5vw + 3rem);
  margin-top: 1rem;
  margin-left: 10vw;

  .b1 {
    width: calc(5vw + 15%);
    height: calc(3vw + 20%);

    button {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      background-color: ${color.orange[10]};

      align-items: center;
      justify-content: center;

      color: #fff;
    }
  }
  .b2 {
    width: calc(5vw + 15%);
    height: calc(3vw + 20%);

    button {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      background-color: ${color.green[10]};

      align-items: center;
      justify-content: center;

      color: #fff;
    }
  }

  @media (max-width: 780px) {
    width: 14rem;
    height: 3rem;

    .b1 {
      width: calc(5vw + 5rem);
      height: calc(3vw + 1.6rem);

      button {
        width: 100%;
        height: 100%;
        border-radius: 6px;
        background-color: ${color.orange[10]};

        align-items: center;
        justify-content: center;

        color: #fff;
      }
    }
    .b2 {
      width: calc(5vw + 5rem);
      height: calc(3vw + 1.6rem);

      button {
        width: 100%;
        height: 100%;
        border-radius: 6px;
        background-color: ${color.green[10]};

        align-items: center;
        justify-content: center;

        color: #fff;
      }
    }
  }
`

export const Boxtest = styled.div`
  height: 100vh;
`

export const BoxParallax = styled(Parallax)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

export const Parallalayer = styled(ParallaxLayer)``

export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100vw;
  height: 50vw;
  background-color: red;
`
