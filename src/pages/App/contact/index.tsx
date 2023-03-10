import { Form } from '@unform/web'
import React from 'react'
import { About } from '../../../components/About'
import { Button } from '../../../components/Button'
import { ButtonContact } from '../../../components/ButtonContact'
import { Input } from '../../../components/Input'
import * as S from './styles'

export function Contact() {
  return (
    <S.Container>
      <Form onSubmit={() => {}}>
        <S.Box>
          <h1>Envie sua mensagem</h1>

          <S.subText>
            Entre em contato com nossa equipe para dúvidas, sugestões e
            melhorias.
          </S.subText>
          <S.Content>
            <div className="area1">
              <Input
                placeholder="Nome"
                aria-placeholder="Nome"
                label="Nome"
                name="name"
              />
              <Input
                label="E-mail"
                placeholder="Digite seu email"
                name="email"
              />
              <Input placeholder="assunto" label="Assunto" name="assunt" />
            </div>
            <div className="area2">
              <textarea placeholder="Mensagem" name="textare"></textarea>
            </div>
          </S.Content>

          <div className="button">
            <Button title="ENVIAR" variant="B" />
          </div>
        </S.Box>

        <ButtonContact />
      </Form>
    </S.Container>
  )
}
