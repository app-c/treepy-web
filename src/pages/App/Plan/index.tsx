import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router'
import { DataPerson } from '../../../components/dataPerson'
import { Header } from '../../../components/Header'
import { HeaderC } from '../../../components/HeaderC'
import { PlanType } from '../../../components/PlanType'
import { useAuth } from '../../../context/authcontext'
import { brlNumber } from '../../../utils/formatNumber'
import * as S from './styles'

interface SelectProps {
  type: 'only' | 'partial' | 'assign'
}

interface PropsParans {
  tree: number
  brl: number
}

export function Plan() {
  const [select, setSelect] = React.useState<SelectProps>({ type: 'only' })
  const [step, setStep] = React.useState(1)

  const nav = useNavigate()
  const { value } = useParams()
  const dt: PropsParans = value ? JSON.parse(value) : {}

  const selectPlan = React.useCallback(
    (type: 'only' | 'partial' | 'assign') => {
      setSelect({ type })
      setStep(2)
    },
    [],
  )

  return (
    <S.Container>
      <HeaderC type="2" />

      {step === 1 && (
        <div>
          <S.title>Escolha uma forma de pagamento</S.title>

          <S.BoxSelect>
            <PlanType
              pres={() => selectPlan('only')}
              text={`${brlNumber(dt.brl.toFixed(2))}`}
              title="Pagamento total "
            />
            <PlanType
              pres={() => selectPlan('partial')}
              text={`${brlNumber(dt.brl.toFixed(2))}`}
              title="Pagamento parcial"
            />
            <PlanType
              pres={() => selectPlan('assign')}
              text={`${brlNumber(dt.brl.toFixed(2))}`}
              title="Pagamento recorrente"
            />
          </S.BoxSelect>
        </div>
      )}

      {step === 2 && (
        <S.box>
          <DataPerson amount={dt.brl} tree={dt.tree} />
        </S.box>
      )}
    </S.Container>
  )
}
