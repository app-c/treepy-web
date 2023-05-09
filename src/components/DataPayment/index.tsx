import React from 'react'
import * as S from './styles'
import { Input } from '../Input'

export function DataPayment() {
  return (
    <S.Container>
      <S.preview>
        <Input placeholder="Nome" label="Nome" name="full_name" />

        <S.gridInput>
          <S.box>
            <Input
              maxLength={16}
              mask="cpf"
              placeholder="CPF"
              label="CPF"
              name="cpf"
            />
          </S.box>

          <S.box style={{ width: 70, marginLeft: 10 }}>
            <Input
              mask="number"
              maxLength={2}
              label="Área"
              placeholder="(99)"
              name="phone_area"
            />
          </S.box>

          <S.box style={{ width: '50%', marginLeft: 10 }}>
            <Input
              mask="number"
              label="99999 9999"
              placeholder="Informe seu celular"
              name="phone_number"
              maxLength={9}
            />
          </S.box>
        </S.gridInput>

        <Input placeholder="E-mail" label="E-mail" name="email" />
        <Input mask="cep" name="postal_code" placeholder="CEP" label="CEP" />

        <S.gridInput>
          <S.box style={{ width: '70%' }}>
            <Input label="Rua" placeholder="Rua" name="street" />
          </S.box>

          <S.box style={{ width: 100, marginLeft: 10 }}>
            <Input
              mask="number"
              label="Nº"
              placeholder="Número"
              name="home_number"
            />
          </S.box>
        </S.gridInput>

        <S.gridInput>
          <S.box style={{ width: '60%' }}>
            <Input name="locality" placeholder="Bairro" label="Bairro" />
          </S.box>

          <S.box style={{ marginLeft: 10 }}>
            <Input
              name="complement"
              placeholder="Complemento"
              label="Complemento"
            />
          </S.box>
        </S.gridInput>
        <S.gridInput>
          <S.box style={{ width: '50%' }}>
            <Input label="Cidade" placeholder="Cidade" name="city" />
          </S.box>

          <S.box style={{ marginLeft: 10 }}>
            <Input label="Estado" placeholder="Estado" name="state" />
          </S.box>

          <S.box style={{ width: '20%', marginLeft: 10 }}>
            <Input label="UF" placeholder="UF" name="region_code" />
          </S.box>
        </S.gridInput>
      </S.preview>
    </S.Container>
  )
}
