import { Form } from '@unform/web'
import { Input } from '../../Input'
import * as S from './styles'
import { useQuery } from 'react-query'
import { api } from '../../../services/api'
import React, { useCallback, useState } from 'react'

interface PropsSubmit {
  name: string
  email: string
  area: string
  phone: string
  password: string
  confirmPass: string
}

interface props {
  loading: (ld: boolean) => void
  submit: (data: PropsSubmit) => void
  ref: any
}

export function CadastroStepOne() {
  return (
    <S.container>
      <Input
        label="Nome completo"
        placeholder="Nome completo"
        name="full_name"
      />
      <Input label="E-mail" placeholder="Email" name="email" />

      <S.boxInput>
        <S.box style={{ width: 65 }}>
          <Input
            placeholder="(99)"
            mask="number"
            name="phone_area"
            label="Área"
          />
        </S.box>

        <Input
          label="Celular"
          mask="number"
          placeholder="Celular"
          name="phone_number"
          maxLength={9}
        />
      </S.boxInput>

      <S.box style={{ width: '60%' }}>
        <Input
          maxLength={16}
          mask="cpf"
          label="CPF"
          placeholder="CPF"
          name="cpf"
        />
      </S.box>
      <Input
        type="password"
        label="Senha"
        placeholder="Senha"
        name="password"
      />
      <Input
        type="password"
        label="Corfime sua senha"
        placeholder="Confirmar senha"
        name="confimationPassword"
      />
    </S.container>
  )
}
