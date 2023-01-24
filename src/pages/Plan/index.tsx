import { Form } from '@unform/web'
import React, { useRef } from 'react'
import { Card } from '../../components/card'
import { DataPerson } from '../../components/dataPerson'
import { Input } from '../../components/Input'
import { Selector } from '../../components/selector'
import { Payment } from '../payment'
import * as S from './styles'

interface SelectProps {
  type: 'cartao' | 'pix' | 'boleto' | 'assing'
}

export function Plan() {
  const [select, setSelect] = React.useState<SelectProps>({ type: 'cartao' })

  return (
    <S.Container>
      <h1>Escolha uma forma de pagamento</h1>

      <S.BoxSelect>
        <Selector
          title="Cartão"
          selected={select.type === 'cartao'}
          pres={() => setSelect({ type: 'cartao' })}
        />

        <Selector
          title="Pix"
          selected={select.type === 'boleto'}
          pres={() => setSelect({ type: 'boleto' })}
        />

        <Selector
          title="Boleto"
          selected={select.type === 'pix'}
          pres={() => setSelect({ type: 'pix' })}
        />

        <Selector
          title="Assinatura"
          selected={select.type === 'assing'}
          pres={() => setSelect({ type: 'assing' })}
        />
      </S.BoxSelect>

      {select.type === 'cartao' && (
        <S.BoxCard>
          <DataPerson amount={10} tree={10} />
        </S.BoxCard>
      )}

      {select.type === 'boleto' && (
        <S.BoxBoleto>
          <h1>boleto</h1>
        </S.BoxBoleto>
      )}

      {select.type === 'pix' && (
        <S.BoxPix>
          <h1>pix</h1>
        </S.BoxPix>
      )}

      {select.type === 'assing' && (
        <S.BoxAss>
          <h1>assinatura</h1>
        </S.BoxAss>
      )}
    </S.Container>
  )
}
