import React, { useCallback, useRef } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { api } from '../../services/api'
import * as S from './styles'
import * as Yup from 'yup'
import { getValidationErrors } from '../../utils/getValidationErrors'
import { FormHandles } from '@unform/core'
import { useToast } from '../../context/ToastContext'
import { useNavigate } from 'react-router'
import { DataPerson } from '../../components/dataPerson'

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

export function SignUpPay() {
  const formRef = useRef<FormHandles>(null)

  const nav = useNavigate()

  const { addToast } = useToast()

  const [step, setStep] = React.useState(1)

  const handleSubmit = useCallback(
    async (data: PropsSingUp) => {
      formRef.current?.setErrors({})
      try {
        const passwordSchema = Yup.string().required('Password is required')

        const confirmationPasswordSchema = Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirmation password is required')

        const schema = Yup.object().shape({
          name: Yup.string().required(),
          midle_name: Yup.string().required(),
          email: Yup.string().email().required('nome obrigatorio'),
          password: passwordSchema,
          confimationPassword: confirmationPasswordSchema,
        })

        const schema1 = Yup.object().shape({
          street: Yup.string().required(),
          bairro: Yup.string().required(),
          number_home: Yup.string().required(),
          city: Yup.string().required(),
          state: Yup.string().required(),
          cep: Yup.string().required(),
        })

        if (step === 1) {
          await schema.validate(data, {
            abortEarly: false,
          })

          setStep(2)
        }

        if (step === 2) {
          await schema1.validate(data, {
            abortEarly: false,
          })

          setStep(3)
        }

        const dt = {
          name: data.name,
          midle_name: data.midle_name,
          email: data.email,
          password: data.password,
          street: data.street,
          bairro: data.bairro,
          number_home: data.number_home,
          city: data.city,
          state: data.state,
          cep: data.cep,
        }

        const info = JSON.stringify(dt)

        // localStorage.setItem('@treepy:step1')

        await api.post('/user/create-user', dt)
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
      console.log(data)
    },
    [addToast, step],
  )

  return (
    <S.Container>
      <Header />
      <S.ContentForm ref={formRef} onSubmit={handleSubmit}>
        {step === 1 && (
          <S.Content>
            <S.BoxForm>
              <S.Box1>
                <div className="content">
                  <Input placeholder="Nome" name="name" />
                  <Input placeholder="Sobrenome" name="midle_name" />
                </div>
                <Input placeholder="E-mail" name="email" />
                <Input placeholder="Senha" name="password" />
                <Input
                  placeholder="Confirme sua senha"
                  name="confimationPassword"
                />
              </S.Box1>
            </S.BoxForm>
          </S.Content>
        )}

        {step === 2 && (
          <S.Box2>
            <h3>Nos informe seu endereço</h3>
            <S.box>
              <S.boxInp1>
                <Input placeholder="rua" name="street" />
              </S.boxInp1>
              <S.boxIn2>
                <Input placeholder="N°" name="number_home" />
              </S.boxIn2>
            </S.box>
            <Input placeholder="bairro" name="bairro" />
            <Input placeholder="cidate" name="city" />

            <S.box>
              <S.boxInp1>
                <Input placeholder="CEP" name="cep" />
              </S.boxInp1>

              <S.boxIn2>
                <Input placeholder="estado" name="state" />
              </S.boxIn2>
            </S.box>
          </S.Box2>
        )}
        <div className="buton">
          <Button sizeW="30vw" variant="B" title="CONTINUAR" />
        </div>
      </S.ContentForm>

      {step === 3 && (
        <S.box3>
          <DataPerson amount={10} tree={10} />
        </S.box3>
      )}
    </S.Container>
  )
}
