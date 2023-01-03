import styled, { css } from 'styled-components'

interface ProsLinks {
  show: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 10rem;
  width: 100%;

  background-color: rgba(35, 61, 29, 0.554);

  @media (max-width: 2000px) {
    height: 7rem;
  }

  @media (max-width: 780px) {
    height: 3rem;
  }
`

export const BoxLog = styled.div`
  display: flex;
  width: 35rem;
  align-items: center;
  justify-content: center;

  h1 {
    color: #ffff;
    font-weight: 900;
    font-size: 2rem;
  }

  @media (max-width: 1556px) {
    width: 10rem;
  }
`

export const BoxLink = styled.div<ProsLinks>`
  display: flex;
  justify-content: flex-end;
  /* align-items: center; */
  padding-right: 10rem;
  width: 100%;

  ul {
    display: flex;
  }

  li {
    justify-content: space-between;
    align-items: center;
    margin-right: 2rem;
    display: flex;

    a {
      color: #fff;
      font-weight: 500;
      font-size: 1.5rem;
    }

    @media (max-width: 2100px) {
      a {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 1590px) {
      a {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 1590px) {
    padding-right: 5rem;
  }

  @media (max-width: 780px) {
    .nave {
      display: none;
    }
    ${(props) =>
      props.show &&
      css`
        position: absolute;

        top: 3rem;
        left: 0;
        background-color: #1e1d1d;

        display: flex;
        justify-content: center;
        align-items: center;

        .nave {
          justify-content: center;
          display: flex;

          ul {
            text-align: center;
            display: block;

            a {
              transition-duration: 0.5s;
              margin-bottom: 3rem;
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
    background: #e4e4e4;
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

    position: absolute;
    top: 2.5rem;
    right: 3rem;

    .one,
    .two,
    .tree {
      background-color: #fff;
      height: 5px;
      width: 100%;
      margin: 6px auto;

      transition-duration: 0.3s;
    }
  }
`
