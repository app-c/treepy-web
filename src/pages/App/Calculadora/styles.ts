import styled, { css } from 'styled-components'
import bus from '../../../assets/bus1.svg'
import car from '../../../assets/car1.svg'
import elet from '../../../assets/eletric1.svg'
import garfo from '../../../assets/garfo1.svg'
import gas from '../../../assets/gas1.svg'
import money from '../../../assets/money.svg'
import { color } from '../../../styles/colors'
import trash from '../../../assets/trash1.svg'

interface PropsProgres {
  progres?: boolean
  step?: number
}

export const Box = styled.div<PropsProgres>`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;

  align-items: center;

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
    props.step === 8 &&
    css`
      background-image: url(${trash});
      background-repeat: no-repeat;
      background-size: 25%;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    color: ${color.green[10]};
  }

  .header {
    display: flex;
    margin-bottom: 1rem;

    h1 {
      /* font-size: clamp(1rem, 4vw, 2rem); */
    }
  }
  /* 
  @media (max-width: 780px) {
    .header {
      display: flex;
      margin-bottom: 1rem;

      h1 {
        font-size: 1.5rem;
      }
    }
  } */
`

export const BoxIcones = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
  width: 80%;
`
export const ContentIco = styled.div<PropsProgres>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ progres: h }) => (h ? color.green[10] : 'none')};
  padding: 1rem;
  border-radius: calc(2rem + 1vw);
  width: calc(4rem + 1vw);
  height: calc(4rem + 1vw);

  /* @media (max-width: 850px) {
    height: 3rem;
    width: 3rem;
    border: 1.5rem;
  } */
`

export const Ico = styled.img`
  width: 80%;
`

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;

  align-items: center;

  @media (max-width: 780px) {
    align-self: center;
    width: 100vw;
    margin: 0;
    padding: 1rem;

    h1 {
    }
  }
`

export const SubTitle = styled.h3`
  /* font-size: clamp(1rem, 4vw, 2rem); */
`

export const Content = styled.div<PropsProgres>`
  display: flex;
  width: 40vw;
  align-items: center;
  justify-content: space-between;

  transition: 0.5s;

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
    ${(h) =>
      h.step! === 1 &&
      css`
        opacity: 0;
      `}
  }

  .next {
    background-color: red;
  }

  @media (max-width: 780px) {
    width: 90vw;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background-color: ${color.green[40]};
  width: 50vw;

  margin-bottom: 2rem;

  color: #fff;

  p {
    margin-bottom: 1rem;
  }

  div {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
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

  @media (max-width: 780px) {
    width: 100vw;
  }
`

export const ContentItens = styled.div`
  /* display: flex; */
  /* background-color: red; */
  border-radius: 10px;
  width: 1px;

  table {
    width: 100rem;
  }
`

export const BoxSelect = styled.select`
  margin-bottom: 1rem;
  border-radius: 5px;
  height: 2rem;
  padding: 0.1rem 2rem;

  font-size: 1rem;
  color: ${color.dark[40]} option {
    color: ${color.dark[30]};
  }
`

export const Buton = styled.button`
  display: flex;
  height: 2rem;
  width: 2.5rem;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 20px;
  border-radius: 5px;
  background-color: ${color.red[10]};
  color: #fff;
  font-weight: 900;
`

export const Table = styled.table`
  border: 1px solid ${color.green[10]};
  border-collapse: collapse;

  th,
  td {
    text-align: center;
    padding: 5px;
    font-size: 1rem;

    @media (max-width: 780px) {
      font-size: 0.67rem;
    }
  }
`

export const BoxResultado = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`

export const ContainerResult = styled.div`
  display: grid;
  /* background-color: green; */
  width: 100%;
  margin-left: 20%;

  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 1rem 5rem;

  .table {
    .title {
      font-size: 1.5rem;
      color: ${color.dark[30]};
      font-weight: bold;

      @media (max-width: 780px) {
        font-size: 1.8rem;
      }
    }

    p {
      font-size: 1rem;
      color: ${color.dark[20]};
      margin-bottom: 10px;
    }

    .botton {
      font-size: calc(1vw + 1.5vh);
      font-weight: 300;
      margin-top: 2rem;

      span {
        font-weight: 400;
      }
    }

    table {
      width: 100%;
      margin-top: 1rem;

      th {
        color: ${color.green[40]};
        font-size: 1rem;
      }

      tr,
      th {
        text-align: start;
        padding: 2px;
        border-bottom: 1px solid ${color.dark[10]};
      }

      td {
        padding: 0.1rem;
        /* border-bottom: 1px solid ${color.dark[10]}; */
      }
    }
  }

  .result {
    display: flex;
    flex-direction: column;
    width: 100%;
    h1 {
      font-size: 2rem;
      color: ${color.green[40]};
      font-weight: 400;
    }

    span {
      color: ${color.green[40]};
      font-weight: 500;
    }

    label {
      display: flex;
      align-items: center;

      h3 {
        font-size: calc(3vw * 1rem);
        color: ${color.green[40]};
      }
    }

    p {
      font-size: calc(1vw + 30%);
      color: ${color.dark[20]};
      margin-top: 2rem;
    }

    .modalbox {
      display: flex;
      align-self: center;
      margin-top: 2rem;

      width: 100%;
      justify-content: space-between;
    }

    @media (max-width: 780px) {
      align-items: center;
      width: 100vw;
      p {
        font-size: calc(1vw + 60%);
        color: ${color.dark[20]};
        margin-top: 2rem;
      }
      .modalbox {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  @media (max-width: 780px) {
    width: 100vw;
    margin: 0;
    padding: 1rem;
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
