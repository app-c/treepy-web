import styled from 'styled-components'

interface props {
  img: string
}

export const Container = styled.div`
  display: flex;

  width: 100%;
`

export const box = styled.div<props>`
  background-color: #dddddd50;
  display: flex;
  border-radius: 8px;

  background-image: ${(h) => `url(${h.img})`};
  background-size: 100% 50rem;
  background-repeat: no-repeat;
  background-position: 0 -26rem;

  width: 100%;
  height: 20rem;

  img {
    width: calc(10rem + 40vw);
    height: auto;
    position: relative;
  }
`
