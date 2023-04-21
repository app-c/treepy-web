import React from 'react'
import * as S from './styles'
import { Input } from '../Input'
import { api } from '../../services/api'
import { _number, brlNumber } from '../../utils/formatNumber'
import { _brand } from '../../utils/_brand'
import { IPropsParcelamento, PropsParcCard } from '../../Dto'

interface props {
  setInstallments: (item: string) => void
  currency: number
}

type IBrand =
  | 'visa'
  | 'mastercard'
  | 'diners'
  | 'amex'
  | 'discover'
  | 'hipercard'
  | 'elo'
  | 'jcb'
  | 'aura'

export function DataCardPayment({ setInstallments, currency = 0 }: props) {
  const [cardNumber, setCardNumber] = React.useState('')
  const [parcelas, setParcelas] = React.useState<PropsParcCard[]>([])
  const [installment, setInstallment] = React.useState('')

  React.useEffect(() => {
    if (cardNumber.length > 18 && currency > 0) {
      try {
        api.get(`/pay-pag/parc/${currency}`).then((response) => {
          const card = _number(cardNumber)
          const brnd = _brand.getCardFlag(card) as IBrand

          const rs = response.data as IPropsParcelamento

          const parc = rs?.payment_methods.credit_card[brnd]
            .installment_plans as PropsParcCard[]
          const pr = parc.map((h, i) => {
            const value = brlNumber(h.amount.value)
            const total = brlNumber(h.installment_value)
            // console.log(_brl(h.installment_value), h.installment_value, 't')
            return {
              ...h,
              amount: {
                ...h.amount,
                value,
                fees: {
                  buyer: {
                    interest: {
                      total,
                      installments:
                        h.amount?.fees?.buyer?.interest?.installments,
                    },
                  },
                },
              },
            }
          })
          setParcelas(pr)
        })
      } catch (err) {}
    }
  }, [cardNumber, currency])
  return (
    <S.Container>
      <S.preview>
        <Input
          name="holder_name"
          placeholder="Nome do titular"
          label="Nome do titular"
        />
        <Input
          maxLength={19}
          mask="card"
          name="number_card"
          placeholder="Número do cartão"
          label="Número do cartão"
          onChange={(h) => setCardNumber(h.currentTarget.value)}
        />

        <S.gridInput>
          <S.box>
            <Input
              maxLength={7}
              mask="expire"
              name="expire"
              label="Validade"
              placeholder="Validade Mês/ano"
            />
          </S.box>

          <S.box style={{ marginLeft: 10, width: 75 }}>
            <Input name="security_code" label="CVV" placeholder="CVV" />
          </S.box>
        </S.gridInput>

        <S.installments>
          <span className="prc">Parcelas</span>
          <S.boxSelection
            onChange={(h) => {
              setInstallment(h.currentTarget.value)
              setInstallments(h.currentTarget.value)
            }}
            name="installments"
            value={installment}
          >
            {parcelas.map((h, i) => (
              <option
                key={i}
                value={h.amount?.fees?.buyer?.interest?.installments || 1}
              >
                {i + 1} x R$
                {i === 0
                  ? h.amount.value
                  : h.amount.fees?.buyer?.interest?.total}
              </option>
            ))}
          </S.boxSelection>
        </S.installments>
      </S.preview>
    </S.Container>
  )
}
