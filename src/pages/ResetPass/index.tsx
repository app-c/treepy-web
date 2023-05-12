import React, { useRef } from 'react'
import * as S from './styles'
import { Input } from '../../components/Input'
import { Form } from '@unform/web'
import { Button } from '../../components/Button'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { getValidationErrors } from '../../utils/getValidationErrors'
import { useToast } from '../../context/ToastContext'
import { ModalComp } from '../../components/ModalComp'
import { api } from '../../services/api'
import { _navigation } from '../../utils/navigation'
import { useNavigate, useParams } from 'react-router-dom'

interface Iprops {
  password: string
  confimationPassword: string
}

interface PropsParans {
  token: string
}

export function ResetPass() {
  const ref = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const [load, setLoad] = React.useState(false)
  const nv = useNavigate()

  const { token } = useParams()
  // const { token }: PropsParans = value ? JSON.parse(value) : ''

  const handleSubmit = React.useCallback(
    async (data: Iprops) => {
      ref.current?.setErrors({})
      // setLoad(true)

      const passwordSchema = Yup.string()
        .required('Senha é obrigatória')
        .min(6, 'Mínimo de 6 digitos')

      const confirmationPasswordSchema = Yup.string()
        .oneOf([Yup.ref('password'), null], 'A senha não confere')
        .required('Confirmation password is required')

      const schema = Yup.object().shape({
        password: passwordSchema,
        confimationPassword: confirmationPasswordSchema,
      })

      try {
        await schema.validate(data, {
          abortEarly: false,
        })
        await api
          .put('/user/reset-password', {
            token,
            password: data.password,
          })
          .then(() => {
            setLoad(false)
            nv('/')
          })
      } catch (err: any) {
        setLoad(false)
        console.log(err)

        const msn = err.response?.data
          ? err.response.data.message
          : err.message
          ? err.message
          : 'Ocorreu um erro ao realizar seu cadastro, verifique suas credenciais ou sua conexão com a rede'

        addToast({
          type: 'error',
          title: 'Erro ao realizar o cadastro',
          description: msn,
        })

        const errors = getValidationErrors(err)
        console.log(errors)
        ref.current?.setErrors(errors)
      }
    },
    [addToast],
  )

  return (
    <S.Container>
      <h3 style={{ alignSelf: 'center', marginBottom: '2rem' }}>
        Crie uma nova senha
      </h3>
      <Form ref={ref} onSubmit={handleSubmit}>
        <S.content>
          <Input
            placeholder="Digite sua nova senha"
            name="password"
            label="Nova senha"
          />
          <Input
            placeholder="Confirme sua senha"
            name="confimationPassword"
            label="Confirme sua nova senha"
          />

          <Button load={load} title="SALVAR" variant="AB" />
        </S.content>
      </Form>
    </S.Container>
  )
}
