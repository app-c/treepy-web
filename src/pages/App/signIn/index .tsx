import { useCallback, useRef } from 'react'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import * as S from './styles'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { useAuth } from '../../../context/authcontext'
import { getValidationErrors } from '../../../utils/getValidationErrors'
import { color } from '../../../styles/colors'
import { Outlet, redirect } from 'react-router-dom'
import { useToast } from '../../../context/ToastContext'
import { HeaderC } from '../../../components/HeaderC'
import { InputV } from '../../../components/InputV'

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
    <S.Container>
      <HeaderC type="2" />
      <S.ContentForm ref={formRef} onSubmit={handleSubmit}>
        <S.Content>
          <h2>Acesse sua conta</h2>

          <div
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              padding: '0 2rem',
              width: '100%',
            }}
          >
            <InputV sizeH="3.4rem" placeholder="E-mail" name="email" />
            <InputV sizeH="3.4rem" placeholder="Senha" name="password" />
            <S.Li style={{ marginBottom: '2rem' }} to={'/forgot'}>
              Esqueceu sua senha?
            </S.Li>

            <Button sizeH="3rem" variant="AC" title="ENTRAR" />
          </div>
          <S.CreateAccont>
            <S.Li to={'/signUp/0'} style={{ color: color.green[30] }}>
              Não tem conta?
            </S.Li>
          </S.CreateAccont>
        </S.Content>
      </S.ContentForm>

      <Outlet />
    </S.Container>
  )
}
