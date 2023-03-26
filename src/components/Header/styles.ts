import { Link, NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { color } from '../../styles/colors'

interface ProsLinks {
  show: boolean
}

interface HeaderProps {
  color: string
}

export const Container = styled.div<HeaderProps>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  position: fixed;
  z-index: 2;
  /* height: 7rem; */

  background-color: ${({ color }) => color};

  @media (max-width: 780px) {
    height: 5rem;
  }
`

export const BoxLog = styled.a<ProsLinks>`
  display: flex;
  /* position: absolute; */
  margin-left: 5vw;
  align-self: center;
  width: calc(4rem + 4vw);
  align-items: center;

  @media (max-width: 780px) {
    left: 2rem;
    margin-top: 1rem;

    ${(props) =>
      props.show &&
      css`
        position: absolute;
        top: 1vw;
        left: 2rem;
        z-index: 100;
      `}
  }

  /* @media (max-width: 450px) {
    width: calc(4vw + 20%);
    top: 33%;
  } */
`

export const BoxLink = styled.div<ProsLinks>`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Nave = styled.div<ProsLinks>`
  display: flex;
  flex-direction: row;
  height: 100%;
  height: calc(3rem + 2vw);

  align-items: center;
  justify-content: space-between;

  padding: 0 4rem;

  a {
    color: #fff;
    font-weight: 400;
    font-size: calc(12px + 0.3vw);
    text-decoration: none;
    margin: 0 15px;

    transition: 0.5s;

    &:hover {
      text-decoration: underline solid 2px;
    }

    @media (max-width: 780px) {
      ${(h) =>
        h.show &&
        css`
          font-size: 1.1rem;
          margin: 10px 0;
        `}
    }
  }

  .buton {
    display: flex;
    height: 100%;
    width: 7rem;
    background-color: #fff;
    align-items: center;
    justify-content: center;

    padding: 5px;

    transition: 1s;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    /* 
    .link {
      text-decoration: none;
      text-align: center;
      color: ${color.orange[20]};
      font-size: calc(12px + 0.2vw);
    } */

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
  display: none;
  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    width: 50px;
    position: fixed;
    padding: 5px;

    top: 0.5rem;
    right: calc(3rem + 13vw);

    transform: translate(1.1rem, 0.1rem);
    background-color: #4141412f;
    transition: 0.4s;
    z-index: 100;

    .one,
    .two,
    .tree {
      background-color: #fff;
      height: 4px;
      width: 100%;
      margin: 5px auto;

      transition-duration: 1s;
    }

    ${(props) =>
      props.show &&
      css`
        top: 3vw;
        left: 50vw;

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

  a {
    margin-left: 5vw;
    color: #fff;
    font-size: calc(10px + 0.4vw);
  }
`

export const Li = styled.a<ProsLinks>`
  color: #fff;
  font-weight: 400;
  font-size: calc(1vw + 15%);
  text-decoration: none;
  margin: 0 15px;

  transition: 0.5s;

  &:hover {
    text-decoration: underline solid 2px;
  }

  @media (max-width: 780px) {
    ${(h) =>
      h.show &&
      css`
        font-size: 1.1rem;
        margin: 10px 0;
      `}
  }
`

export const bt = styled.div`
  position: absolute;
  display: flex;

  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
  top: 6rem;
  right: 30px;
  cursor: pointer;

  padding: 10px 30px;
  border-radius: 18px;

  &:hover {
    opacity: 0.8;
  }
`

export const lk = styled(Link)`
  color: #000;
  width: 100%;
  height: 100%;
  margin-top: 20px;

  cursor: pointer;
  text-decoration: none;
`
