import React from 'react'
import { Header } from '../../../components/Header'
import { HeaderC } from '../../../components/HeaderC'
import * as S from './styles'

export function Inovation() {
  return (
    <S.Container>
      <HeaderC type="3" />
      <S.content>
        <h1>Inovação</h1>
        <p>
          Somos a primeira plataforma de cashback de arvores, o “Treepycash”. O
          TreepyCash é uma maneira que a Treepy criou para incentivar o
          reflorestamento. Ele funciona como uma moeda virtual que representa a
          quantidade de árvores que serão plantadas na natureza.
        </p>

        <p>
          Você poderá adquirir seus Treepycash diretamente no nosso site, ou
          pelas compras de produtos ou serviços em nossos parceiros. Assim
          poderá compensar suas emissões de gases de efeito estufa com
          reflorestamento.
        </p>

        <S.button to="/calc">
          <p>Calcule agora a sua pegada de carbono</p>
        </S.button>
      </S.content>
    </S.Container>
  )
}
