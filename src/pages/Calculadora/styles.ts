import styled, { css } from 'styled-components'
import { color } from '../../styles/colors'
import car from '../../assets/car1.svg'
import elet from '../../assets/eletric1.svg'
import gas from '../../assets/gas1.svg'
import bus from '../../assets/bus1.svg'
import garfo from '../../assets/garfo1.svg'
import money from '../../assets/money.svg'

interface PropsProgres {
  progres?: boolean
  step?: number
}

export const Box = styled.div<PropsProgres>`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;

  ${(props) =>
    props.step === 1 &&
    css`
      background-image: url(${elet});
      background-repeat: no-repeat;
      background-size: 30%;
      background-position-y: 100%;
    `}

  ${(props) =>
    props.step === 2 &&
    css`
      background-image: url(${gas});
      background-repeat: no-repeat;
      background-size: 30%;
      background-position-y: 100%;
    `}

    ${(props) =>
    props.step === 3 &&
    css`
      background-image: url(${car});
      background-repeat: no-repeat;
      background-size: 30%;
      background-position-y: 100%;
    `}

    ${(props) =>
    props.step === 4 &&
    css`
      background-image: url(${bus});
      background-repeat: no-repeat;
      background-size: 30%;
      background-position-y: 100%;
    `}

    ${(props) =>
    props.step === 5 &&
    css`
      background-image: url(${garfo});
      background-repeat: no-repeat;
      background-size: 30%;
      background-position-y: 100%;
    `}

    ${(props) =>
    props.step === 6 &&
    css`
      background-image: url(${money});
      background-repeat: no-repeat;
      background-size: 25%;
      background-position-y: 100%;
    `}
`

export const Container = styled.div`
  margin-top: 6rem;
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

export const BoxResultado = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const ContainerResult = styled.div`
  display: grid;
  /* background-color: green; */
  width: 70%;
  margin-left: 27%;

  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  .table {
    .title {
      font-size: 2.4rem;
      color: ${color.dark[20]};
      font-weight: bold;
    }

    p {
      font-size: 1rem;
      color: ${color.dark[20]};
      margin-bottom: 10px;
    }

    .botton {
      font-size: 2rem;
      font-weight: 300;
      margin-top: 2rem;

      span {
        font-weight: 400;
      }
    }
    table {
      width: 100%;
      margin-top: 2rem;

      th {
        color: ${color.green[40]};
        font-size: 1.6rem;
      }

      tr,
      th {
        text-align: start;
        padding: 2px;
        /* border-bottom: 1px solid ${color.dark[10]}; */
      }

      td {
        padding: 0.6rem;
        border-bottom: 1px solid ${color.dark[10]};
      }
    }
  }

  .result {
    display: flex;
    flex-direction: column;
    padding-left: 5rem;

    h1 {
      font-size: 4rem;
      color: ${color.green[40]};
      font-weight: 400;
    }

    span {
      font-size: 2rem;
      color: ${color.green[40]};
      font-weight: 500;
      margin-left: 10px;
    }

    label {
      display: flex;
      align-items: center;

      h3 {
        font-size: 2rem;
        color: ${color.green[40]};
      }
    }

    p {
      font-size: 2rem;
      color: ${color.dark[20]};
      margin-top: 2rem;
    }
  }
`

export const Botao = styled.button`
  border: none;
  background-color: ${color.green[10]};
  width: 35%;
  padding: 3%;
  border-radius: 25px;

  color: #fff;
  font-size: 1.3rem;

  align-self: center;
  margin-top: 6rem;
`
