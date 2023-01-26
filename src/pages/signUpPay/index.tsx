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

export interface PropsSingUp {
  name: string
  email: string
  password: string
  midle_name: string
  street: string
  localy: string
  number_home: string
  city: string
  region: string
  postal_code: string
}

interface PropsStep1 {
  name: string
  email: string
  password: string
  midle_name: string
}

export function SignUpPay() {
  const formRef = useRef<FormHandles>(null)

  const { addToast } = useToast()
  const [dados, setDados] = React.useState<PropsSingUp>({} as PropsSingUp)
  const [dadosStep1, setDadosStep1] = React.useState<PropsStep1>(
    {} as PropsStep1,
  )

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
          localy: Yup.string().required(),
          number_home: Yup.number().required(),
          city: Yup.string().required(),
          region: Yup.string().required(),
          postal_code: Yup.string().required(),
        })

        const dt = {
          name: dadosStep1.name,
          midle_name: dadosStep1.midle_name,
          email: dadosStep1.email,
          password: dadosStep1.password,
          street: data.street,
          localy: data.localy,
          number_home: data.number_home,
          city: data.city,
          region: data.region,
          postal_code: data.postal_code,
        }

        if (step === 1) {
          await schema.validate(data, {
            abortEarly: false,
          })

          setStep(2)
          setDadosStep1({
            name: data.name,
            midle_name: data.midle_name,
            email: data.email,
            password: data.password,
          })
        }

        if (step === 2) {
          await schema1.validate(data, {
            abortEarly: false,
          })

          setStep(3)
          setDados(dt)
        }

        // await api.post('/user/create-user', dt)
      } catch (err: any) {
        addToast({
          type: 'error',
          title: 'Erro ao realizar o cadastro',
          description:
            'Ocorreu um erro ao realizar seu cadastro, verifique suas credenciais ou sua conexão com a rede',
        })

        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)
      }
      console.log(data)
    },
    [
      addToast,
      dadosStep1.email,
      dadosStep1.midle_name,
      dadosStep1.name,
      dadosStep1.password,
      step,
    ],
  )

  console.log(dados)

  return (
    <S.Container>
      <Header />
      <S.ContentForm ref={formRef} onSubmit={handleSubmit}>
        {step === 1 && (
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
        )}

        {step === 2 && (
          <S.Box2>
            <h3>Nos informe seu endereço</h3>
            <S.box>
              <Input placeholder="rua" name="street" />
              <Input mask="number" placeholder="N°" name="number_home" />
            </S.box>
            <Input placeholder="bairro" name="localy" />
            <Input placeholder="cidate" name="city" />

            <S.box>
              <S.boxInp1>
                <Input
                  maxLength={2}
                  autoCapitalize="upercase"
                  mask="cep"
                  placeholder="CEP"
                  name="postal_code"
                />
              </S.boxInp1>

              <S.boxIn2>
                <Input placeholder="estado" name="region" />
              </S.boxIn2>
            </S.box>
          </S.Box2>
        )}
        <div className="buton">
          {step < 3 && <Button sizeW="30vw" variant="B" title="CONTINUAR" />}
        </div>
      </S.ContentForm>

      {step === 3 && (
        <S.box3>
          <DataPerson data={dados} amount={10} tree={10} />
        </S.box3>
      )}
    </S.Container>
  )
}
