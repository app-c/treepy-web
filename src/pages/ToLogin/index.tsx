import React from 'react'
import { HeaderC } from '../../components/HeaderC'
import * as S from './styles'

export function ToLogin() {
  return (
    <S.Container>
      <HeaderC type="2" />

      <S.contetn>
        <S.title>Seu dashboard de reflorestamento está em construção.</S.title>

        <S.subTitle style={{ marginTop: -30, marginBottom: '2rem' }}>
          Estamos trabalhando na construção de um novo dashboard para aprimorar
          sua experiência. Em breve, você terá acesso a uma nova e melhorada
          maneira de interagir conosco. Agradecemos sua paciência durante esse
          processo.
        </S.subTitle>

        <h2 style={{ marginTop: '2rem' }}>
          Calcule agora sua pegada de carbono
        </h2>
        <S.button to="/calc">
          <S.titleBt>CLIQUE AQUI</S.titleBt>
        </S.button>
      </S.contetn>
    </S.Container>
  )
}
