import React, { ReactNode } from 'react'
import { useParams } from 'react-router'
import { Button } from '../Button'
import { Selector } from '../selector'
import * as S from './styles'

interface Props {
  title: string
  text: string
  amount: string
}

export function PlanType({ title, text, amount }: Props) {
  return (
    <S.Container>
      <S.Box>
        <S.Title>{title}</S.Title>
        <span>R${amount}</span>

        <S.Content>
          <p>{text}</p>
        </S.Content>
      </S.Box>
    </S.Container>
  )
}
