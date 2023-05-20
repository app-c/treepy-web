import React, { useCallback, useRef } from 'react'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import * as S from './styles'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { useAuth } from '../../../context/authcontext'
import { getValidationErrors } from '../../../utils/getValidationErrors'
import { color } from '../../../styles/colors'
import { Outlet, redirect, Navigate, useNavigate } from 'react-router-dom'
import { useToast } from '../../../context/ToastContext'
import { HeaderC } from '../../../components/HeaderC'
import { InputV } from '../../../components/InputV'
import { ModalComp } from '../../../components/ModalComp'
import { Form } from '@unform/web'
import { api } from '../../../services/api'

interface PropsSingUp {
  email: string
  password: string
}

export function SignIn() {
  const formRef = useRef<FormHandles>(null)
  const { signInP } = useAuth()
  const { addToast } = useToast()

  const [email, setEmail] = React.useState('')
  const [showModal, setShowModal] = React.useState(false)
  const nv = useNavigate()

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

        await signInP({
          email: data.email,
          password: data.password,
        })

        // redirect('/dash')
        nv('/tologin')
      } catch (err: any) {
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

    [addToast, nv, signInP],
  )

  const handleSendForgotEmail = React.useCallback(async () => {
    await api
      .post('/user/send-forgot-password', email)
      .then((h) => {
        // setShowModal(false)
        addToast({
          title: 'Sucesso!',
          type: 'success',
          description:
            'Verefique sua caixa de entrada para recuperar sua senha',
        })
      })
      .catch((h) => {
        alert(h.response.data.message)
      })
  }, [addToast, email])

  return (
    <S.Container>
      <HeaderC type="2" />
      <ModalComp
        modal={(h) => setShowModal(h)}
        show={showModal}
        component={
          <Form onSubmit={() => {}}>
            <S.boxModal>
              <h2>Entre com seu email para recuperar sua senha</h2>
              <Input name="email" />

              <div>
                <Button
                  pres={handleSendForgotEmail}
                  title="ENVIAR"
                  variant="B"
                />
              </div>
            </S.boxModal>
          </Form>
        }
      />
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
            <InputV
              type="password"
              sizeH="3.4rem"
              placeholder="Senha"
              name="password"
            />
            <div style={{ alignSelf: 'flex-start' }}>
              <Button
                type="button"
                pres={() => setShowModal(true)}
                title="Esqueceu sua senha?"
                variant="D"
              />
            </div>

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
