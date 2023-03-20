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
          1) Calcule a quantidade de árvores plantadas é necessário para sua
          compensação
        </S.subTitle>

        <S.subTitle>2) Crie sua conta para começar a compensar</S.subTitle>

        <S.subTitle>
          3) Consuma produtos / serviços dos nossos parceiros para receber
          Treepycash ou compre diretamente
        </S.subTitle>

        <S.button to="/calc">
          <S.titleBt>Calcule agora a sua pegada de carbono</S.titleBt>
        </S.button>
      </S.contetn>
    </S.Container>
  )
}
