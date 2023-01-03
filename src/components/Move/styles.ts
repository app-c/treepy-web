import styled from 'styled-components'
import crianca from '../../assets/crianca.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${crianca});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  height: 45vw;

  color: #fff;

  align-items: center;
  justify-content: center;

  h1 {
    font-size: calc(2vw + 1rem);
    margin-bottom: 20px;
  }

  p {
    font-size: calc(1vw + 0.5rem);
    margin-bottom: 40px;
  }
`
