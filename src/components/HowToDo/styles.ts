import styled from 'styled-components'
import { color } from '../../styles/colors'

import savana from '../../assets/savana.jpg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url(${savana});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 100%;

  flex-direction: column;
  position: relative;
  overflow: hidden;
  display: flex;
  z-index: 1;
  background-attachment: fixed;

  padding: calc(5rem + 2vw);
  align-items: center;
  justify-content: center;
  color: #fff;

  h1 {
    margin-bottom: 2rem;
  }

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
  visibility: hidden;
  display: grid;
  width: 80vw;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  grid-template-rows: 55vh;

  grid-gap: 1rem;

  @media (max-width: 780px) {
    grid-template-rows: 20rem;
  }
`

export const box = styled.div`
  background-color: rgba(34, 34, 34, 0.6);
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  align-items: center;
  padding: calc(5rem + 2vw) 10px;

  color: #fff;

  line {
    display: flex;
    width: 40%;
    background-color: ${color.green[10]};
    height: 3px;
    margin-top: 5px;
    margin-bottom: 30px;
  }

  .title {
    font-size: clamp(18px, 2vw, 2.2rem);
    font-weight: 600;
    text-align: center;
  }

  p {
    text-align: center;
    font-size: clamp(16px, 2vw, 1.5rem);
  }
`
