import { useTransition } from '@react-spring/web'
import { Form } from '@unform/web'
import { useCallback } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { api } from '../../services/api'
import { BoxForm, BoxLogo, Container, Content, ContentForm } from './styles'

interface PropsSingUp {
  name: string
  email: string
  password: string
  midle_name: string
  street: string
  bairro: string
  number_home: string
  city: string
  state: string
  cep: string
}

export function SignUp() {
  const handleSubmit = useCallback(async (data: PropsSingUp) => {
    console.log(data)
    // const dt = {
    //   name: data.name,
    //   email: data.email,
    //   password: data.password,
    //   midle_name: data.midle_name,
    //   street: data.street,
    //   bairro: data.bairro,
    //   number_home: data.number_home,
    //   city: data.city,
    //   state: data.state,
    //   cep: data.cep,
    // }
    // await api
    //   .post('/user/create-user', dt)
    //   .then((h) => console.log(h.status, 'sucesso'))
    //   .catch((h) => console.log(h.response.data.message, 'erro'))
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <BoxLogo>
          <div className="logo">
            <Logo />
          </div>
        </BoxLogo>

        <BoxForm>
          {/* <AnimetedForm> */}

          <ContentForm onSubmit={handleSubmit}>
            <div className="content">
              <Input placeholder="Nome" name="name" />
              <Input placeholder="Sobrenome" name="midle_name" />
            </div>
            <Input placeholder="E-mail" name="email" />
            <Input placeholder="Senha" name="password" />

            <div className="end">
              <Input placeholder="Rua" name="street" />
              <Input placeholder="Bairro" name="bairro" />
              <div></div>

              <div className="content">
                <Input mask="number" placeholder="Numero" name="number_home" />
                <Input mask="cep" placeholder="CEP" name="cep" />
              </div>
              <Input placeholder="Cidade" name="city" />
              <Input placeholder="Estado" name="state" />
            </div>

            <div className="buton">
              <Button variant="B" title="CRIAR CONTA" />
            </div>
          </ContentForm>
          {/* </AnimetedForm> */}
        </BoxForm>
      </Content>
    </Container>
  )
}
