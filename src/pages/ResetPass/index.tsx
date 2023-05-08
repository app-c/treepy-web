import React, { useRef } from 'react'
import * as S from './styles'
import { Input } from '../../components/Input'
import { Form } from '@unform/web'
import { Button } from '../../components/Button'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { getValidationErrors } from '../../utils/getValidationErrors'
import { useToast } from '../../context/ToastContext'

interface Iprops {
  password: string
  confimationPassword: string
}

export function ResetPass() {
  const ref = useRef<FormHandles>(null)
  const { addToast } = useToast()

  const handleSubmit = React.useCallback(
    async (data: Iprops) => {
      ref.current?.getErrors({})
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

      console.log(data)

      try {
        await schema.validate(data, {
          abortEarly: false,
        })
      } catch (err: any) {
        console.log(err.message!)

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

          <Button title="SALVAR" variant="AB" />
        </S.content>
      </Form>
    </S.Container>
  )
}
