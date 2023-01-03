import styled from 'styled-components'

interface Props {
  size: string
}

export const Container = styled.div``

export const Box = styled.svg<Props>`
  width: ${({ size: h }) => h};
`
