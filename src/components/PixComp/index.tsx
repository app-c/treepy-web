import React from 'react'
import * as S from './styles'

interface props {
  image: string
}

export function PixComp({ image }: props) {
  return (
    <S.Container>
      <S.grid>
        <S.boxImag>
          <img src={image} alt="QRCode Image" />
        </S.boxImag>
      </S.grid>
    </S.Container>
  )
}
