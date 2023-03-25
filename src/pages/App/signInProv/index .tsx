import { useCallback, useRef } from 'react'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import * as S from './styles'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { useAuth } from '../../../context/authcontext'
import { getValidationErrors } from '../../../utils/getValidationErrors'
import { color } from '../../../styles/colors'
import { Outlet, redirect, useNavigate } from 'react-router-dom'
import { useToast } from '../../../context/ToastContext'
import { HeaderC } from '../../../components/HeaderC'

interface PropsSingUp {
  email: string
  password: string
}

export function SignInProv() {
  const formRef = useRef<FormHandles>(null)
  const { signInP } = useAuth()
  const { addToast } = useToast()
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
        }).then((h) => {
          nv('/calc')
        })
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

    [addToast, signInP],
  )

  return (
    <S.Container>
      <HeaderC type="2" />
      <S.Content>
        <S.ContentForm ref={formRef} onSubmit={handleSubmit}>
          <S.BoxForm>
            <h4>Entre com sua conta para continuar com a calculadora</h4>
            <div className="inputs">
              <Input sizeH="2.4rem" placeholder="E-mail" name="email" />
              <Input sizeH="2.4rem" placeholder="Senha" name="password" />
            </div>
            <S.Li to={'/forgot'}>Esqueceu sua senha?</S.Li>
            <div className="buton">
              <Button sizeH="3rem" variant="AC" title="ENTRAR" />
            </div>
            <S.CreateAccont>
              <S.Li to={'/signUp'} style={{ color: color.green[30] }}>
                não tenho conta
              </S.Li>
            </S.CreateAccont>
          </S.BoxForm>
        </S.ContentForm>
      </S.Content>

      <Outlet />
    </S.Container>
  )
}
