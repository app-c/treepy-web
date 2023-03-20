import styled from 'styled-components'
import { color } from '../../styles/colors'

export const Container = styled.div`
  display: grid;
  background-color: ${color.dark[20]};

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: calc(20vw + 5rem);

  @media (max-width: 980px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`

export const content = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  padding: 6rem;

  @media (max-width: 780px) {
    padding: 1rem;
    margin-top: 6rem;
  }
`

export const subTitle = styled.p`
  margin-top: 30px;
  font-size: 1.2rem;
`

export const title = styled.h1`
  color: #fff;
`

// export const BoxContact = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 10rem;

//   @media (max-width: 1500px) {
//     padding: 1rem;
//   }

//   @media (max-width: 750px) {
//     margin-top: 4rem;
//   }
// `

export const BoxMidia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 5rem;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${color.dark[40]};
  }

  @media (max-width: 1500px) {
    padding: 5rem 2rem;
  }
`
