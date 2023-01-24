import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'
import { color } from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 70vh; */
  width: 90vw;
  align-items: center;
  justify-content: center;

  padding: 2rem;
  border-radius: 10px;
  border: 1px solid ${color.green[10]};
  h1 {
    margin-bottom: 1rem;
  }

  @media (max-width: 780px) {
    /* height: 100vh; */
  }
`

export const Bttom = styled.button``

export const Content = styled.div`
  display: grid;
  width: 100%;
  /* align-items: center; */
  grid-gap: 1rem 5rem;

  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  .person {
    .box {
      width: 100%;
      display: flex;

      .marg {
        margin: 0 10px;
      }
    }
  }

  .localy {
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

  /* padding: 0 3rem; */

  .content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 1rem 6rem;
    margin: 2rem 0;
  }
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

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    grid-gap: 3rem;

    .selectparc {
      display: flex;
      flex-direction: column;
      margin-top: -15px;

      .prc {
        margin-bottom: 5px;
      }
    }
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

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(207, 0, 0, 0.824);
`

export const ContentDialog = styled(Dialog.Content)`
  min-width: 20rem;
  padding: 1rem;
  background-color: #303030;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  align-items: center;
  justify-content: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const BoxDialog = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`

export const Closed = styled(Dialog.Close)``
