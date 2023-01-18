import styled from 'styled-components'
import { color } from '../../styles/colors'

export const Container = styled.div`
  margin: 2rem 0;
  display: 100%;
  padding: 0 3rem;

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 1rem 6rem;
    /* background-color: red; */
    margin-bottom: 4rem;
  }
`

export const BoxCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${color.green[10]};
  /* width: 0%; */
  height: 20rem;
  padding: 1.5rem;
  border-radius: 5px;
`

export const ContentCard = styled.div`
  color: #fff;
  .option {
    display: flex;
    margin: 1rem 0;
  }
`

export const Boxform = styled.div`
  label {
    margin-top: 1rem 0;

    input {
      width: 4rem;
      padding: 5px 20px;
      border: 1px solid ${color.dark[30]};
      border-radius: 5px;
      width: 100%;
      margin: 1rem 0;
      color: ${color.dark[20]};
    }
  }
  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    grid-gap: 3rem;
  }
`

export const BoxItem = styled.div`
  height: 100%;
  padding: 1rem;
`

export const BoxItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px;
`
