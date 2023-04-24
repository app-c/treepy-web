import React, { ReactNode } from 'react'
import { useParams } from 'react-router'
import { Button } from '../Button'
import { Selector } from '../selector'
import * as S from './styles'

interface Props {
  amount: string
}

export function PlanType({ amount }: Props) {
  return (
    <S.Container>
      <S.grid>
        <S.Box>
          <S.Title>Pagamento total</S.Title>
          <span>R${amount}</span>

          <S.Content>
            <p>
              Nesse plano, o total de TreepyCash comprado será suficiente para
              zerar suas emissões de carbono! <br /> <br /> Além de capturar
              CO₂, você contribuirá para proteger a biodiversidade e reduzir as
              mudanças climáticas. <br /> <br /> Parabéns por sua postura
              sustentável e responsável. Parabéns por zerar suas emissões!
            </p>
          </S.Content>
        </S.Box>

        <S.Box>
          <S.Title>Pagamento parcial</S.Title>
          <span>R${amount}</span>

          <S.Content>
            <p>
              Nesse plano, você compensa apenas parte de suas emissões de
              carbono! Você decide quantos TreepyCashes quer comprar. <br />{' '}
              <br /> Essa opção também é importante, demonstra seu compromisso
              com a sustentabilidade e a sua preocupação com o planeta. <br />{' '}
              <br /> Parabéns e continue reflorestando!
            </p>
          </S.Content>
        </S.Box>

        <S.Box>
          <S.Title>Pagamento parcelado</S.Title>
          <span>R${amount}</span>

          <S.Content>
            <p>
              Nesse plano, você compensa as emissões em uma modalidade de
              pagamento parcelado. Você zera as suas emissões em parcelas
              mensais. <br /> <br /> Esta modalidade proporciona uma maior
              flexibilidade financeira, ao mesmo tempo em que você contribui
              ativamente para a redução das mudanças climáticas, demonstrando
              seu compromisso com a sustentabilidade. <br /> <br /> Parabéns,
              você está no caminho certo!
            </p>
          </S.Content>
        </S.Box>
      </S.grid>
    </S.Container>
  )
}
