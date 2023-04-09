import React from 'react'
import { HeaderC } from '../../components/HeaderC'
import * as S from './styles'

export function ToPrestador() {
  return (
    <S.Container>
      <HeaderC type="2" />
      <S.contetn>
        <S.title>
          Sua empresa cria valor de sustentabilidade para os seus clientes?
        </S.title>

        <S.subTitle>
          Seja um parceiro Treepy e ofereça produtos ou serviços com valor
          sustentável, criando um diferencial em relação aos seus concorrentes.
        </S.subTitle>

        <S.subTitle>
          Atrelar a marca de produtos ou serviços a ações de ESG* tem influência
          direta nas escolhas de consumo das pessoas.
        </S.subTitle>

        <S.subTitle>
          Pesquisas apontam uma tendência crescente pela preocupação com o meio
          ambiente e as consequências na vida do planeta.{' '}
        </S.subTitle>

        <S.subTitle>Ficou interessado?</S.subTitle>

        <S.button to="/parc">
          <S.titleBt>FALE CONOSCO</S.titleBt>
        </S.button>
      </S.contetn>
    </S.Container>
  )
}
