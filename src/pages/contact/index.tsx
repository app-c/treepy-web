import { Form } from '@unform/web'
import React from 'react'
import { About } from '../../components/About'
import { Button } from '../../components/Button'
import { ButtonContact } from '../../components/ButtonContact'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Box, Container, Content } from './styles'

export function Contact() {
  return (
    <Container>
      <Header />

      <About type="b" />

      <Form>
        <Box>
          <h1>Fale com o nosso time</h1>

          <p>Escreva aqui sua mensagem</p>
          <Content>
            <div className="area1">
              <Input
                placeholder="Nome"
                aria-placeholder="Nome"
                place="Nome"
                name="name"
              />
              <Input
                placeholder="digite seu sobrenome"
                place="Sobrenome"
                name="midlename"
              />
              <Input
                place="E-mail"
                placeholder="Digite seu email"
                name="email"
              />
              <textarea placeholder="Endereço" />
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
