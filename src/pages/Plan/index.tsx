import { Form } from '@unform/web'
import React, { useRef } from 'react'
import { redirect, useNavigate, useParams } from 'react-router'
import { Card } from '../../components/card'
import { DataPerson } from '../../components/dataPerson'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { PlanType } from '../../components/PlanType'
import { Selector } from '../../components/selector'
import { Payment } from '../payment'
import * as S from './styles'

interface SelectProps {
  type: 'only' | 'partial' | 'assign'
}

export function Plan() {
  const [select, setSelect] = React.useState<SelectProps>({ type: 'only' })

  const nav = useNavigate()
  const { value } = useParams()

  console.log(value)

  const createAccount = React.useCallback(
    (type: 'only' | 'partial' | 'assign') => {
      const id = new Date().getTime()
      const data = {
        id,
        amount: value,
        typePlan: select.type,
      }
      localStorage.setItem('@treepy:plam', JSON.stringify(data))

      nav(`/signUp/${id}`)
    },
    [select.type, value],
  )

  return (
    <S.Container>
      <Header />
      <S.title>Escolha uma forma de pagamento</S.title>

      <S.BoxSelect>
        <PlanType
          pres={() => createAccount('only')}
          text={`${value}`}
          title="Pagamento total "
        />
        <PlanType
          pres={() => createAccount('partial')}
          text={`${value}`}
          title="Pagamento parcial"
        />
        <PlanType
          pres={() => createAccount('assign')}
          text={`${value}`}
          title="Pagamento recorrente"
        />
      </S.BoxSelect>
    </S.Container>
  )
}
