import { Form } from '@unform/web'
import styled from 'styled-components'
import { color } from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 70vh; */
  width: 100vw;
  align-items: center;
  justify-content: center;

  padding: 2rem;
  border-radius: 10px;
  border: 1px solid ${color.green[10]};

  h1 {
    margin-bottom: 1rem;
  }

  h3 {
    color: ${color.green[40]};
  }

  @media (max-width: 780px) {
    /* height: 100vh; */
  }
`

export const BoxSelector = styled.div`
  display: flex;
  justify-content: space-between;

  width: clamp(200px, 300px, 500px);

  margin-bottom: 3rem;
`

export const Bttom = styled.button``

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  @media (max-width: 980px) {
    width: 100%;
  }

  grid-gap: 0 1rem;
`

export const Content = styled.div`
  display: grid;
  width: 100%;
  /* align-items: center; */
  grid-gap: 1rem 5rem;

  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  .person {
    h3 {
      margin-bottom: 2rem;
    }
    .box {
      width: 100%;
      display: flex;

      .marg {
        margin: 0 10px;
      }
    }
  }

  .localy {
    h3 {
      margin-bottom: 2rem;
    }
    display: flex;
    flex-direction: column;

    .box {
      display: flex;
      width: 100%;

      .marg {
        margin: 0 10px;
      }
    }
  }

  @media (max-width: 780px) {
    grid-gap: 1rem 0;
    width: 100%;

    .person {
      align-items: center;
    }
  }
`

// INFORMAÇOES DO CARTÃO

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`

export const grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 1rem 6rem;
  margin: 2rem 0;
`

export const gridInpu = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 150px 150px 150px 1fr;
  grid-gap: 1rem 3rem;

  @media (max-width: 750px) {
    grid-gap: 1rem;
  }
`

export const qrCode = styled.img`
  width: 300px;
  height: 300px;
`

export const BoxCard = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 1rem;
  }
`

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;

  .content {
    width: 100%;
    display: flex;

    align-items: center;
    justify-content: space-between;
  }
`

export const Boxform = styled.div`
  label {
    margin-top: 1rem 0;
  }
`

export const installments = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 3px;
  }
`

export const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  h3 {
    margin-bottom: 1rem;
  }
`

export const BoxSelect = styled.select`
  width: 100%;
  height: 1.8rem;
  /* padding: 1rem 2rem; */
  display: flex;

  /* background-color: #fff; */
  border: 0.8px solid ${color.dark[40]};
  border-radius: 5px;
`

export const form = styled(Form)`
  display: flex;
  flex-direction: column;
`

export const bt = styled.button`
  display: flex;
  background-color: ${color.green[10]};
  color: #fff;
  padding: 15px 10px;

  align-self: center;
  justify-content: center;
  align-items: center;

  width: calc(2rem + 25vw);
`
