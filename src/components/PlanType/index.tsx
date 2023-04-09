import React from 'react'
import { useParams } from 'react-router'
import { Button } from '../Button'
import { Selector } from '../selector'
import * as S from './styles'

interface Props {
  title: string
  text: string
  pres: () => void
}

export function PlanType({ title, text, pres }: Props) {
  const [select, setSelect] = React.useState()
  const { type } = useParams()
  return (
    <S.Container>
      <S.Box>
        <S.Title>{title}</S.Title>
        <span>R${text}</span>

        <S.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            odit cum provident esse asperiores, est culpa officiis, amet dolor
            magnam quo quis blanditiis corporis eos rem saepe ea eum. Officia?
            {text}
          </p>
        </S.Content>

        <Button title="QUERO ESTE PLANO" variant="AB" pres={pres} />
      </S.Box>
    </S.Container>
  )
}
