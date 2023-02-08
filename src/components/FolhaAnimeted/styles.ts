import styled, { keyframes } from 'styled-components'
interface Props {
  sizeY: string
  sizeX: string
  color: string
}
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const fol = keyframes`
  to  {
    border-radius: 5px;
  }
`

export const Box = styled.div<Props>`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-color: ${(h) => h.color};
  width: 23rem;
  height: 17rem;
  padding: 1.2rem;

  border-radius: 0 7rem 0 7rem;
  transition: 0.7s;

  color: #f0f0f0;

  text-align: center;

  span {
    font-size: 1.3vw;
    margin-bottom: 1rem;
    align-self: center;
    font-weight: 600;
  }

  &:hover {
    border-radius: 5px;
    transform: scale(1.2);
  }

  @media (max-width: 1100px) {
    width: 9rem;
    height: 10rem;
    padding: 1.2rem;
    border-radius: 0 4.5rem 0 4.5rem;

    span {
      font-size: 1vw;
      margin-bottom: 1rem;
      align-self: center;
      font-weight: 600;
    }

    p {
      font-size: 0.6rem;
    }
  }

  @media (max-width: 780px) {
    width: 9rem;
    height: 10rem;
    padding: 1.2rem;
    border-radius: 0 4.5rem 0 4.5rem;

    span {
      font-size: 0.8rem;
      margin-bottom: 1rem;
      align-self: center;
      font-weight: 600;
    }

    p {
      font-size: 0.6rem;
    }
  }

  /* transition-property: ; */
`
