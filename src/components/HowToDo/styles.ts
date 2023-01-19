import styled from 'styled-components'
import { color } from '../../styles/colors'

import savana from '../../assets/savana.png'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url(${savana});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 100%;

  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 1;
  background-attachment: fixed;

  padding: 10rem 15rem;
  align-items: center;
  justify-content: center;
  color: #fff;

  h1 {
    margin-bottom: 2rem;
  }

  /* &::after {
    content: '';
    height: 50%;
    width: 100%;
    position: absolute;
    z-index: 8;
    background: linear-gradient(
      to bottom,
      rgb(14, 14, 14) 0,
      rgb(0, 0, 0) 40%,
      rgb(35, 35, 35) 100%
    );
  } */

  @media (max-width: 1200px) {
    padding: 5rem;
  }

  @media (max-width: 780px) {
    padding: 1rem;
    height: 100rem;
    background-position: center;
  }
`

export const BoxCard = styled.div`
  display: grid;
  width: 80vw;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  grid-template-rows: 55vh;

  grid-gap: 1rem;

  @media (max-width: 780px) {
    grid-template-rows: 20rem;
  }

  div {
    background-color: rgba(34, 34, 34, 0.6);
    border-radius: 10px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    padding: 10px 30px;

    color: #fff;

    line {
      display: flex;
      width: 4rem;
      background-color: ${color.green[10]};
      height: 3px;
      margin-top: 5px;
      margin-bottom: 30px;
    }

    .title {
      font-size: 1.5rem;
      font-weight: 600;
      text-align: center;
    }

    @media (max-width: 780px) {
      .title {
        font-size: 1.2rem;
        margin-bottom: 5px;
      }

      line {
        width: 100%;
      }
    }
    p {
      text-align: center;
    }
  }

  /* @media (max-width: 1332px) {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
    grid-template-rows: 25rem 25rem 25rem 25rem;
  } */
`
