import { Form } from '@unform/web'
import React from 'react'
import { About } from '../../../components/About'
import { Button } from '../../../components/Button'
import { ButtonContact } from '../../../components/ButtonContact'
import { Input } from '../../../components/Input'
import { Box, Container, Content } from './styles'

export function Contact() {
  return (
    <Container>
      <Form onSubmit={() => {}}>
        <Box>
          <h1>Fale com o nosso time</h1>

          <p>Escreva aqui sua mensagem</p>
          <Content>
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
          </Content>

          <div className="button">
            <Button title="ENVIAR" variant="B" />
          </div>
        </Box>

        <ButtonContact />
      </Form>
    </Container>
  )
}
