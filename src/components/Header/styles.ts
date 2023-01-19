import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { color } from '../../styles/colors'

interface ProsLinks {
  show: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* height: calc(2vw + 11%); */
  width: 100vw;
  position: fixed;
  z-index: 2;
  /* height: 7rem; */

  background-color: rgba(34, 71, 26, 0.5);

  @media (max-width: 780px) {
    height: 5rem;
  }
`

export const BoxLog = styled.div<ProsLinks>`
  display: flex;
  width: calc(2vw + 10%);
  align-items: center;
  /* justify-content: center; */

  @media (max-width: 780px) {
    position: absolute;
    left: 2rem;
    top: 37%;

    ${(props) =>
      props.show &&
      css`
        position: absolute;

        top: 3vw;
        left: 5rem;
      `};
  }

  @media (max-width: 450px) {
    width: calc(4vw + 20%);
    top: 33%;
  }
`

export const BoxLink = styled.div<ProsLinks>`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Nave = styled.div<ProsLinks>`
  display: flex;
  flex-direction: row;
  height: 7rem;
  align-items: center;
  justify-content: space-between;

  padding: 0 4rem;

  .buton {
    display: flex;
    height: 100%;
    width: 7rem;
    background-color: #fff;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;

    transition: 1s;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .link {
      text-decoration: none;
      text-align: center;
      color: ${color.orange[20]};
    }

    @media (max-width: 780px) {
      ${(h) =>
        h.show &&
        css`
          height: 3rem;
          width: 100%;
          border-radius: 5px;
        `}
    }
  }

  @media (max-width: 780px) {
    display: none;

    transition: 2s;

    ${(props) =>
      props.show &&
      css`
        position: fixed;

        top: 0;
        left: 0;
        background-color: ${color.dark[20]};

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        z-index: 10;
        height: 100vh;

        height: 100vh;
        width: 70vw;
        transition: 1s;
      `}
  }
`

export const Menu = styled.button<ProsLinks>`
  @media (max-width: 780px) {
    width: 40px;
    height: 30px;
    position: fixed;

    top: 2.3rem;
    right: 10%;
    background-color: #00000000;
    transition: 0.4s;
    z-index: 100;

    ${(props) =>
      props.show &&
      css`
        top: 3vw;
        left: 60vw;

        .one {
          transform: rotate(45deg) translate(7px, 7px);
        }

        .two {
          opacity: 0;
        }

        .tree {
          transform: rotate(-45deg) translate(8px, -9px);
        }
      `}

    .one,
    .two,
    .tree {
      background-color: #fff;
      height: 4px;
      width: 100%;
      margin: 6px auto;

      transition-duration: 1s;
    }
  }
`

export const BoxContato = styled.div`
  display: flex;
  background-color: ${color.dark[10]};
  width: 100%;
  top: 0;

  align-items: center;

  height: 2rem;

  color: #fff;
  padding-left: calc(1vw + 10%);
`

export const Li = styled(Link)<ProsLinks>`
  color: #fff;
  font-weight: 400;
  font-size: calc(1.3vw + 10%);
  text-decoration: none;
  transition: 1s;
  margin: 0 15px;

  @media (max-width: 780px) {
    ${(h) =>
      h.show &&
      css`
        font-size: 1.1rem;
        margin: 10px 0;
      `}
  }
`
