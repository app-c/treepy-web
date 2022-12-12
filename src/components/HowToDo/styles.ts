import styled from 'styled-components'
import { color } from '../../styles/colors'

export const Container = styled.div`
  width: 100vw;
  /* height: 40rem; */

  display: flex;
  background: radial-gradient(
    129.86% 284.46% at -11.08% 64.4%,
    #fd8e05 0%,
    #ffba3f 46.62%,
    #fd9104 100%
  );
  padding: 10rem 15rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 780px) {
    padding: 5rem;
  }
`

export const BoxCard = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: 25rem;

  grid-gap: 1rem;

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
      background-color: ${color.green[100]};
      height: 3px;
      margin-top: 5px;
      margin-bottom: 30px;
    }

    .title {
      font-size: 1.5rem;
      font-weight: 600;
      text-align: center;
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
