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
  margin: 0;
  margin-top: 3rem;
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
  width: 20rem;
  height: 22rem;
  padding: 1.2rem;

  border-radius: 0 9rem 0 9rem;
  transition: 0.7s;

  color: #f0f0f0;

  text-align: center;

  span {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    align-self: center;
    font-weight: 600;
  }

  &:hover {
    border-radius: 5px;
    transform: scale(1.2);
  }

  @media (max-width: 780) {
    transform: scale(0.8);
  }

  /* transition-property: ; */
`
