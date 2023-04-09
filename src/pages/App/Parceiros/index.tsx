import { Form } from '@unform/web'
import React from 'react'
import { HeaderC } from '../../../components/HeaderC'
import { Input } from '../../../components/Input'
import * as S from './styles'

export function Parceiros() {
  return (
    <S.Container>
      <HeaderC type="2" />
      <S.content>
        <h1>Quer ser um parceiro Treepy?</h1>

        <S.text>
          Se sua empresa está buscando criar valor sustentável para o seu
          produto ou serviço, analisaremos o melhor modelo de negócios para a
          nossa parceria.
        </S.text>

        <S.text>
          Ou se sua <span>empresa for de reflorestamento</span>, tenha acesso
          aos benefícios da nossa parceria. Entre em contato que retornaremos
          com uma proposta.
        </S.text>

        <S.form onSubmit={() => {}}>
          <S.boxForm>
            <S.box1>
              <Input label="Nome" placeholder="Informe seu nome" name="name" />
              <Input
                label="E-mail"
                placeholder="Informe seu email"
                name="name"
              />
              <Input
                label="Assunto"
                placeholder="Informe o assunto"
                name="name"
              />
            </S.box1>

            <S.box2>
              <S.area placeholder="Digite sua proposta aqui" />
            </S.box2>
          </S.boxForm>
          <S.bt>ENVIAR</S.bt>
        </S.form>
      </S.content>
    </S.Container>
  )
}
