import React from 'react'
import { HeaderC } from '../../../components/HeaderC'
import * as S from './styles'

export function Providers() {
  return (
    <S.Container>
      <HeaderC type="3" />

      <S.content>
        <h1>O planeta precisa de ajuda de todos...</h1>

        <S.text>
          A devastação do meio ambiente tem causado desequilíbrios climáticos,
          extinção de espécies, escassez de água e doenças. O planeta precisa de
          ações urgentes para evitar uma catástrofe ambiental.
        </S.text>

        <S.text>
          O reflorestamento é muito importante para contribuir na mitigação das
          mudanças climáticas, já que as árvores absorvem dióxido de carbono da
          atmosfera.
        </S.text>

        <S.text>
          Você sabia que cada árvore plantada pode retirar da atmosfera até 22kg
          de CO2 por ano, reduzindo emissões de gases de efeito estufa e, ainda
          gerar crédito de carbono que futuramente poderão ser comercializados.
        </S.text>

        <S.boxRow>
          <S.subTitle>Agir Agora é preciso: Nós precisamos de você!</S.subTitle>

          <S.button to="/calc">
            <S.titleBt>Calcule agora a sua pegada de carbono</S.titleBt>
          </S.button>
        </S.boxRow>
      </S.content>
    </S.Container>
  )
}
