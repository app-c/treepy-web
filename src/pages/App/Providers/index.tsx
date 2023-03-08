import React from 'react'
import { HeaderC } from '../../../components/HeaderC'
import * as S from './styles'

export function Providers() {
  return (
    <S.Container>
      <HeaderC type="3" />

      <S.content>
        <h1>O planeta precisa de ajuda de todos...</h1>

        <p>
          A devastação do meio ambiente tem causado desequilíbrios climáticos,
          extinção de espécies, escassez de água e doenças. O planeta precisa de
          ações urgentes para evitar uma catástrofe ambiental.
        </p>

        <p>
          O reflorestamento é muito importante para contribuir na mitigação das
          mudanças climáticas, já que as árvores absorvem dióxido de carbono da
          atmosfera.
        </p>

        <p>
          Você sabia que cada árvore plantada pode retirar da atmosfera até 22kg
          de CO2 por ano, reduzindo emissões de gases de efeito estufa e, ainda
          gerar crédito de carbono que futuramente poderão ser comercializados.
        </p>
      </S.content>
    </S.Container>
  )
}
