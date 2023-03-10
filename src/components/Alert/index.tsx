import React from 'react'
import * as S from './styles'

interface Props {
  title: string
  texto: string
  closed: () => void
  showModal: boolean
  type?: S.cor
}

export function Alert({
  title,
  texto,
  closed,
  showModal,
  type = 'sucess',
}: Props) {
  return (
    <S.Container isOpen={showModal}>
      <S.cotent type={type}>
        <S.bt onClick={closed}>
          <p>Fechar</p>
        </S.bt>
        <S.title>{title}</S.title>
        <S.text>{texto}</S.text>
      </S.cotent>
    </S.Container>
  )
}
