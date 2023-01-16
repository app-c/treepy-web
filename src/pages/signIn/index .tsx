import { useCallback, useRef } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { api } from '../../services/api'
import { BoxForm, BoxLogo, Container, Content, ContentForm, Li } from './styles'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/authcontext'
import { getValidationErrors } from '../../utils/getValidationErrors'

interface PropsSingUp {
  email: string
  password: string
}

export function SignIn() {
  const formRef = useRef<FormHandles>(null)
  const { signIn, user } = useAuth()

  console.log(user)

  const handleSubmit = useCallback(
    async (data: PropsSingUp) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string().required().email('E-mail obrigatório'),
          password: Yup.string().min(6, 'senha no mínimo 6 digitos'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        signIn({
          email: data.email,
          password: data.password,
        })
      } catch (err: any) {
        const errors = getValidationErrors(err)
        console.log(errors)
        formRef.current?.setErrors(errors)
      }
    },
    [signIn],
  )

  return (
    <Container>
      <Header />
      <Content>
        <BoxLogo>
          <div className="logo">
            <Logo />
          </div>
        </BoxLogo>

        <ContentForm ref={formRef} onSubmit={handleSubmit}>
          <BoxForm>
            {/* <AnimetedForm> */}
            <h1>Entre com sua conta</h1>
            <div className="inputs">
              <Input placeholder="E-mail" name="email" />
              <Input placeholder="Senha" name="password" />
            </div>

            <Li to={'/signUp'}>criar uma conta</Li>

            <div className="buton">
              <Button variant="B" title="ENTRAR" />
            </div>
            {/* </AnimetedForm> */}
          </BoxForm>
        </ContentForm>
      </Content>
    </Container>
  )
}
