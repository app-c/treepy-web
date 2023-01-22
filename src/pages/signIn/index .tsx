import { useCallback, useRef } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { api } from '../../services/api'
import { BoxForm, BoxLogo, Container, Content, ContentForm, Li } from './styles'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { useAuth } from '../../context/authcontext'
import { getValidationErrors } from '../../utils/getValidationErrors'
import { color } from '../../styles/colors'
import { Outlet, useNavigate } from 'react-router-dom'

interface PropsSingUp {
  email: string
  password: string
}

export function SignIn() {
  const formRef = useRef<FormHandles>(null)
  const { signIn, user } = useAuth()
  const navgate = useNavigate()

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
        navgate('/dash')
      } catch (err: any) {
        const errors = getValidationErrors(err)
        console.log(errors)
        formRef.current?.setErrors(errors)
      }
    },

    [navgate, signIn],
  )

  return (
    <Container>
      <Header color={color.green[40]} />
      <Content>
        {/* <BoxLogo>
          <div className="logo">
            <Logo colorF={color.orange[20]} colorL="#fff" />
          </div>
        </BoxLogo> */}

        <ContentForm ref={formRef} onSubmit={handleSubmit}>
          <BoxForm>
            {/* <AnimetedForm> */}
            <h1>Entre com sua conta</h1>
            <div className="inputs">
              <Input sizeH="3rem" placeholder="E-mail" name="email" />
              <Input sizeH="3rem" placeholder="Senha" name="password" />
            </div>

            <Li to={'/signUp'}>criar uma conta</Li>

            <div className="buton">
              <Button variant="B" title="ENTRAR" />
            </div>
            {/* </AnimetedForm> */}
          </BoxForm>
        </ContentForm>
      </Content>

      <Outlet />
    </Container>
  )
}
