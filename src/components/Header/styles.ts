import styled, { css } from 'styled-components'
import { color } from '../../styles/colors'

interface ProsLinks {
  show: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(2vw + 11%);
  width: 100vw;
  position: fixed;
  z-index: 2;

  background-color: rgba(34, 71, 26, 0.597);

  @media (max-width: 780px) {
    height: calc(1vw + 12%);
  }
`

export const BoxLog = styled.div<ProsLinks>`
  display: flex;
  width: calc(2vw + 20%);
  align-items: center;
  justify-content: center;
  left: 10px;

  @media (max-width: 780px) {
    position: absolute;
    left: calc(2vw + 5%);

    ${(props) =>
      props.show &&
      css`
        position: absolute;

        top: 3vw;
        left: 5rem;
      `}
  }
`

export const BoxLink = styled.div<ProsLinks>`
  display: flex;
  justify-content: space-around;
  /* padding-right: calc(0.2vw + 3%); */
  width: 100%;
  position: fixed;
  margin-top: 2rem;
  height: calc(1vw + 9.5%);
  z-index: 100;

  ul {
    display: flex;
  }

  li {
    justify-content: space-between;
    align-items: center;
    margin-right: 1.5vw;
    display: flex;

    a {
      color: #fff;
      font-weight: 500;
      font-size: calc(1.3vw + 10%);
      text-decoration: none;
      transition: 1s;

      &:hover {
        text-decoration: solid 2px underline;
      }
    }
  }

  @media (max-width: 780px) {
    .nave {
      display: none;

      transition: 2s;
    }
    ${(props) =>
      props.show &&
      css`
        position: relative;

        top: 0;
        left: 0;
        background-color: ${color.dark[20]};

        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;

        .nave {
          display: flex;
          justify-content: center;
          /* z-index: 10; */

          ul {
            text-align: center;
            display: block;

            a {
              transition-duration: 2s;
              padding: 10px;
              margin-bottom: 2rem;
              width: 100%;
              font-size: 1rem;

              transition-duration: 0.5s;

              &:hover {
                background-color: ${color.green[40]};
              }
            }
          }
        }

        height: 100vh;
        width: 70vw;

        .menu-toggle {
          .one {
            transform: rotate(45deg) translate(7px, 7px);
          }

          .two {
            opacity: 0;
          }

          .tree {
            transform: rotate(-45deg) translate(8px, -9px);
          }
        }
      `}
  }
`

export const Nave = styled.div`
  display: flex;
  flex-direction: row;
`

export const Buttom = styled.button`
  height: 90%;
  width: 9vw;
  padding: 10px;
  background: #fff;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 780px) {
    height: 5rem;
  }
`

export const BoxButton = styled.button``

export const NaveLink = styled.div`
  display: flex;
  padding-right: 10rem;
`

export const Menu = styled.button`
  @media (max-width: 780px) {
    width: 40px;
    height: 30px;

    position: fixed;
    top: 2.8rem;
    right: 3rem;
    background-color: transparent;

    .one,
    .two,
    .tree {
      background-color: #fff;
      height: 4px;
      width: 100%;
      margin: 6px auto;

      transition-duration: 0.3s;
    }
  }
`

export const BoxContato = styled.div`
  display: flex;
  position: absolute;
  background-color: ${color.dark[10]};
  width: 100%;

  align-items: center;

  height: 2rem;

  color: #fff;
  padding-left: calc(1vw + 10%);
`
