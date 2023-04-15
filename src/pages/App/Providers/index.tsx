import React from 'react'
import { HeaderC } from '../../../components/HeaderC'
import * as S from './styles'

export function Providers() {
  return (
    <S.Container>
      <HeaderC type="3" />

      <S.content>
        <h1>O planeta precisa da ajuda de todos...</h1>

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
          de CO₂ por ano, reduzindo emissões de gases de efeito estufa e, ainda
          gerar créditos de carbono que futuramente poderão ser comercializados.
        </S.text>

        <S.boxC>
          <S.subTitle>Agir agora é preciso: Nós precisamos de você!</S.subTitle>

          <h1 style={{ marginTop: '2rem' }}>
            Calcule agora sua <br /> pegada de carbono
          </h1>
          <S.button to="/calc">
            <S.titleBt>CLICK AQUI</S.titleBt>
          </S.button>
        </S.boxC>
      </S.content>
    </S.Container>
  )
}
