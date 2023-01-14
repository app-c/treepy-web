import { Form } from '@unform/web'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import {
  AnimetedForm,
  BoxForm,
  BoxLogo,
  Container,
  Content,
  ContentForm,
} from './styles'

export function SignUp() {
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

          <ContentForm onSubmit={() => {}}>
            <Input placeholder="Nome" name="nome" />
            <Input placeholder="Sobrenome" name="midle_name" />
            <Input placeholder="E-mail" name="email" />
            <Input placeholder="Senha" name="password" />

            <div className="end">
              <Input placeholder="Rua" name="street" />
              <Input placeholder="Bairro" name="bairro" />
              <div></div>

              <div>
                <Input placeholder="Numero" name="number_home" />
                <Input placeholder="Cidade" name="city" />
                <Input placeholder="Estado" name="state" />
              </div>
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
