import styled from 'styled-components'

interface Props {
  size: string
}

export const Container = styled.div``

export const Box = styled.svg<Props>`
  width: ${({ size: h }) => h};

  @media (max-width: 720px) {
    width: 120%;
  }
`
