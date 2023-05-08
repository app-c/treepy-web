import React, { ReactNode } from 'react'
import { Selector } from '../../selector'
import * as S from './styles'
import { Link } from 'react-router-dom'
import term from '../../../../public/termos_treepy.pdf'

interface Iprops {
  selectComp: ReactNode
}

export function FinshiSignUp({ selectComp }: Iprops) {
  return (
    <S.container>
      <S.boxTermo to={term} target="_blank">
        Clique para ler os Termos e Condições
      </S.boxTermo>

      {selectComp}

      <S.title>Clique em salvar para finalizar seu cadastro</S.title>
    </S.container>
  )
}
