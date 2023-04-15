import React from 'react'
import { HeaderC } from '../../components/HeaderC'
import * as S from './styles'

export function ToYou() {
  return (
    <S.Container>
      <HeaderC type="2" />

      <S.contetn>
        <S.title>Sabia que você pode reflorestar o planeta?</S.title>

        <S.subTitle style={{ marginTop: -30, marginBottom: '2rem' }}>
          É simples, fácil e inovador reflorestar com a Treepy.
        </S.subTitle>

        <S.subTitle>
          Nossa plataforma foi desenvolvida para que qualquer pessoa possa
          compensar suas emissões de carbono. Veja como é simples:
        </S.subTitle>

        <S.subTitle>
          1) Calcule a quantidade de árvores plantadas necessárias para sua
          compensação
        </S.subTitle>

        <S.subTitle>2) Crie sua conta para começar a compensar</S.subTitle>

        <S.subTitle>
          3) Consuma produtos e serviços dos nossos parceiros para receber
          TreepyCash ou compre diretamente pela nossa plataforma
        </S.subTitle>

        <h2 style={{ marginTop: '2rem' }}>
          Calcule agora sua <br /> pegada de carbono
        </h2>
        <S.button to="/calc">
          <S.titleBt>CLICK AQUI</S.titleBt>
        </S.button>
      </S.contetn>
    </S.Container>
  )
}
