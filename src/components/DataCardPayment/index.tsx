/* eslint-disable no-unused-vars */
import React from 'react'
import * as S from './styles'
import { Input } from '../Input'
import { api } from '../../services/api'
import { _number, brlNumber } from '../../utils/formatNumber'
import { _brand } from '../../utils/_brand'
import { IPropsParcelamento, PropsParcCard } from '../../Dto'
import { useAuth } from '../../context/authcontext'

interface props {
  setInstallments: (item: string) => void
  currency: number
  type: string
}

interface IEncrypt {
  encryptedCard: string
  errors: []
  hasErrors: boolean
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

const SAND_BOX_PUBLICKEY =
  'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr+ZqgD892U9/HXsa7XqBZUayPquAfh9xx4iwUbTSUAvTlmiXFQNTp0Bvt/5vK2FhMj39qSv1zi2OuBjvW38q1E374nzx6NNBL5JosV0+SDINTlCG0cmigHuBOyWzYmjgca+mtQu4WczCaApNaSuVqgb8u7Bd9GCOL4YJotvV5+81frlSwQXralhwRzGhj/A57CGPgGKiuPT+AOGmykIGEZsSD9RKkyoKIoc0OS8CPIzdBOtTQCIwrLn2FxI83Clcg55W8gkFSOS6rWNbG5qFZWMll6yl02HtunalHmUlRUL66YeGXdMDC2PuRcmZbGO5a/2tbVppW6mfSWG3NPRpgwIDAQAB'

const PUBLICKEY =
  'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArrqvfhnF7yudiLnoth7zSTGys0NxpD7IMBcKDk2NryLYvX1iBenOXjrenitjz6DL1U3OaPtNYYp7oHNhRmK+yx/wsq8GH7UoLWyVEhJD5kYtZNgujJmaqL0LZ2yn3TxJUEqLC+ty2jTmNJkw/PTwbTFg2Eb2FdaMviKZYW+/V4EURfJYZWEhgosB10oPFcPwQCHaCeW7ats22DyqFNFtllpFvdRwi4V/JmdC8FQKsdqrwUS6yMweY49Xo70itHsoUz2VN2zP0CMw3/yMU/pqwAQQrp5zozSntnAdiv1B9HDuAcfCKKs2QoduQVuaST2BTijjIaqlB9vqiUUhvGwOrQIDAQAB'

export function DataCardPayment({
  setInstallments,
  currency = 0,
  type,
}: props) {
  const { colectData } = useAuth()
  const [cardNumber, setCardNumber] = React.useState('')
  const [parcelas, setParcelas] = React.useState<PropsParcCard[]>([])
  const [installment, setInstallment] = React.useState('')

  const [holder, setHolder] = React.useState('')
  const [number, setNumber] = React.useState('')
  const [securityCode, setSecurityCode] = React.useState('')
  const [expired, setExpired] = React.useState('')
  const [expMonth, expYear] = expired.split('/').map(String)

  React.useEffect(() => {
    const dataEncriptCard = {
      publicKey: PUBLICKEY,
      holder,
      number: _number(cardNumber),
      expMonth,
      expYear,
      securityCode,
    }
    colectData(dataEncriptCard)
  }, [cardNumber, colectData, expMonth, expYear, holder, securityCode])

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
          onChange={(h) => setHolder(h.currentTarget.value)}
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
              onChange={(h) => setExpired(h.currentTarget.value)}
            />
          </S.box>

          <S.box style={{ marginLeft: 10, width: 75 }}>
            <Input
              onChange={(h) => setSecurityCode(h.currentTarget.value)}
              name="security_code"
              label="CVV"
              placeholder="CVV"
            />
          </S.box>
        </S.gridInput>

        {type !== 'total' && (
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
        )}
      </S.preview>
    </S.Container>
  )
}
