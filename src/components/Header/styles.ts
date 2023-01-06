import styled, { css } from 'styled-components'
import { color } from '../../styles/colors'

interface ProsLinks {
  show: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(2vw + 10%);
  width: 100%;
  position: absolute;

  background-color: rgba(35, 61, 29, 0.554);

  @media (max-width: 780px) {
    height: 3rem;
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
        left: 10vw;
      `}
  }
`

export const BoxLink = styled.div<ProsLinks>`
  display: flex;
  justify-content: space-around;
  /* padding-right: calc(0.2vw + 3%); */
  width: 100%;

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
      font-size: calc(1.5vw + 15%);
      text-decoration: none;
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
        position: absolute;

        top: 0;
        left: 0;
        background-color: ${color.dark[20]};

        display: flex;
        justify-content: center;
        align-items: center;

        .nave {
          display: flex;
          justify-content: center;

          ul {
            text-align: center;
            display: block;

            a {
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
        z-index: 10;

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
  height: 100%;
  width: 10rem;
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
