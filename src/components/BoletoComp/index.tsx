import React from 'react'
import * as S from './styles'

interface props {
  image: string
}

export function BoletoComp({ image }: props) {
  return (
    <S.Container>
      <S.box img={image}></S.box>
    </S.Container>
  )
}
