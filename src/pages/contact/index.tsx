import { Form } from '@unform/web'
import React from 'react'
import { About } from '../../components/About'
import { Button } from '../../components/Button'
import { ButtonContact } from '../../components/ButtonContact'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { color } from '../../styles/colors'
import { Box, BoxMap, Container, Content } from './styles'

export function Contact() {
  return (
    <Container>
      <Header color={color.green[20]} />

      <BoxMap />

      <Form onSubmit={() => {}}>
        <Box>
          <h1>Fale com o nosso time</h1>

          <p>Escreva aqui sua mensagem</p>
          <Content>
            <div className="area1">
              <Input
                sizeH="3rem"
                placeholder="Nome"
                aria-placeholder="Nome"
                name="name"
              />
              <Input sizeH="3rem" placeholder="Digite seu email" name="email" />
              <textarea placeholder="Endereço" />
              <Button sizeH="4rem" title="ENVIAR" variant="AC" />
            </div>

            <div className="area2">
              <h4>ANTES DE FALAR COM A GENTE</h4>

              <p>
                Se você, como a gente quer transformar o mundo em um lugar
                melhor, entre em contato conosco.
              </p>

              <p>
                Se você sentiu falta de alguma informação, mande-nos uma
                mensagem, será um prazer ouvi-lo.
              </p>

              <h4>INFORMAÇÕES DE CONTATO</h4>
            </div>
          </Content>

          <div className="button"></div>
        </Box>
      </Form>
      <ButtonContact />
    </Container>
  )
}
