import styled from 'styled-components'
import { color } from '../../styles/colors'

interface PropsProgres {
  progres?: boolean
  step?: number
}

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #e7e7e7;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 4rem;

  .header {
    display: flex;
    margin-bottom: 1rem;
    h1 {
      font-size: 2.4vw;
    }

    .t2 {
      color: ${color.green[10]};
      margin-left: 20px;
    }
  }
`

export const BoxIcones = styled.div`
  display: flex;
  width: 50vw;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
`
export const ContentIco = styled.div<PropsProgres>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ progres: h }) => (h ? color.green[10] : 'none')};
  padding: 2rem;
  border-radius: 3.5rem;
  width: 7rem;
  height: 7rem;
`

export const Ico = styled.img`
  width: 2.5vw;
`

export const BoxContent = styled.div`
  align-self: flex-end;
  margin-right: 10rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  .t {
    display: flex;
    margin-bottom: 1rem;
    align-self: flex-start;
    h1 {
      font-size: calc(1vw + 1rem);
    }

    .t2 {
      color: ${color.green[10]};
      margin-left: 10px;
    }
  }
`

export const Content = styled.div<PropsProgres>`
  display: flex;
  width: 40vw;
  align-items: center;
  justify-content: space-between;

  .p {
    width: 6vw;
    display: flex;
    opacity: ${({ step: h }) => (h! === 1 ? 0 : 1)};
    flex-direction: row;
  }

  .n {
    width: 6vw;
    display: flex;
    flex-direction: row;
  }

  .prev {
    display: flex;
    opacity: ${({ step: h }) => (h! <= 1 ? 0 : 1)};
    width: 10vw;
    height: 3vw;

    div {
      display: flex;
      width: 100%;
    }
  }

  .next {
    display: flex;
    width: 10vw;
    height: 3vw;

    div {
      display: flex;
      width: 100%;
    }
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 2rem;
  background-color: ${color.green[40]};
  width: 50vw;

  margin-bottom: 4rem;

  color: #fff;

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  div {
    margin-top: 20px;
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: space-between;
  }

  table {
    border: 1;
    margin-top: 20px;

    tr {
      text-align: center;
      align-items: center;

      .cancel {
        height: 10px;
      }
    }
  }
`

export const Input = styled.input`
  margin-bottom: 1rem;
  border-radius: 5px;
  height: 2vw;
  padding: 1rem 2rem;

  font-size: 1.5rem;
`

export const ContentItens = styled.div`
  /* display: flex; */
  background-color: red;
  border-radius: 10px;
  width: 1px;

  table {
    width: 100rem;
  }
`

export const BoxSelect = styled.select`
  margin-bottom: 1rem;
  border-radius: 5px;
  height: 2vw;
  padding: 0.1rem 2rem;

  font-size: 1.2rem;

  option {
    color: ${color.dark[20]};
  }
`

export const Table = styled.table`
  border: 1px solid ${color.green[10]};
  border-collapse: collapse;

  th,
  td {
    text-align: center;
    padding: 5px;

    .button-cancel {
      display: flex;
      height: 2rem;
      width: 2.5rem;
      align-items: center;
      justify-content: center;
      position: relative;
      top: -20px;
      left: 1.5rem;
    }
  }
`
