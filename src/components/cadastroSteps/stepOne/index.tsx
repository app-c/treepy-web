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

export function CadastroStepOne({ loading, submit, ref }: props) {
  const [email, setMail] = useState('')
  const [name, setName] = React.useState('')
  const [cpf, setCpf] = React.useState('')

  return (
    <S.container>
      <S.title>ONE</S.title>
      <Input
        onChange={(h) => setName(h.target.value)}
        placeholder="Nome completo"
        name="name"
      />
      <Input
        onChange={(h) => setMail(h.target.value)}
        placeholder="Email"
        name="email"
      />

      <S.boxInput>
        <Input
          placeholder="(99)"
          mask="number"
          name="area"
          style={{ width: 50 }}
        />
        <S.box>
          <Input mask="number" placeholder="Celular" name="phoneNumber" />
        </S.box>
      </S.boxInput>
      <Input
        onChange={(h) => setCpf(h.target.value)}
        placeholder="CPF"
        name="cpf"
      />
      <Input placeholder="Senha" name="password" />
      <Input placeholder="Confirmar senha" name="confirmPass" />
    </S.container>
  )
}
