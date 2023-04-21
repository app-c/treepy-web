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
        <S.text>
          Somos a primeira plataforma de cashback de árvores, o “TreepyCash”.
          <S.text>
            O TreepyCash é uma maneira que a Treepy criou para incentivar o
            reflorestamento. Ele funciona como uma moeda virtual que representa
            a quantidade de árvores que serão plantadas na natureza.
          </S.text>
        </S.text>

        <S.text>
          Você poderá adquirir seus TreepyCashes diretamente no nosso site, ou
          pelas compras de produtos ou serviços em nossos parceiros. Assim
          poderá compensar suas emissões de gases de efeito estufa com
          reflorestamento.
        </S.text>

        <h2 style={{ marginTop: '2rem' }}>
          Calcule agora sua pegada de carbono
        </h2>
        <S.button to="/calc">
          <S.titleBt>CLIQUE AQUI</S.titleBt>
        </S.button>
      </S.content>
    </S.Container>
  )
}
