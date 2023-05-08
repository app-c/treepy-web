import React, { ReactNode } from 'react'
import * as S from './styles'
import Modal from 'react-modal'

interface props {
  show: boolean
  component: ReactNode
  modal: (modal: boolean) => void
}

export function ModalComp({ show, component, modal }: props) {
  return (
    <S.modal isOpen={show}>
      <S.Container>
        <S.closed onClick={() => modal(false)}>X</S.closed>
        <div>{component}</div>
      </S.Container>
    </S.modal>
  )
}
