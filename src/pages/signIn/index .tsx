import { useCallback, useRef } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { BoxForm, Container, Content, ContentForm, Li } from './styles'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { useAuth } from '../../context/authcontext'
import { getValidationErrors } from '../../utils/getValidationErrors'
import { color } from '../../styles/colors'
import { Outlet, redirect } from 'react-router-dom'
import { useToast } from '../../context/ToastContext'

interface PropsSingUp {
  email: string
  password: string
}

export function SignIn() {
  const formRef = useRef<FormHandles>(null)
  const { signIn } = useAuth()
  const { addToast } = useToast()

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

        await signIn({
          email: data.email,
          password: data.password,
        })

        redirect('/dash')
      } catch (err: any) {
        console.log(err.response?.data.message, 'erro')

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro ao fazer login, verifique suas credenciais',
        })

        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)
      }
    },

    [addToast, signIn],
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
