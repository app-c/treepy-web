import React, { ReactNode, useCallback, useRef, useState } from 'react'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { api } from '../../../services/api'
import * as S from './styles'
import * as Yup from 'yup'
import { HeaderC } from '../../../components/HeaderC'
import { getValidationErrors } from '../../../utils/getValidationErrors'
import { FormHandles } from '@unform/core'
import { useToast } from '../../../context/ToastContext'
import { Loading } from '../../../components/Loading'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../../context/authcontext'
import { Alert } from '../../../components/Alert'
import { CadastroStepOne } from '../../../components/cadastroSteps/stepOne'
import { CadastroStepTwo } from '../../../components/cadastroSteps/stepTwo'
import { useForm } from '../../../hooks/steps/useForm'
import { Form } from '@unform/web'

interface PropsSingUp {
  full_name: string
  email: string
  cpf: string
  phone_area: string
  phone_number: string
  password: string
  street: string
  locality: string
  home_number: string
  city: string
  state: string
  region_code: string
  postal_code: string
}

interface Step1 {
  full_name: string
  email: string
  cpf: string
  phone_area: string
  phone_number: string
  password: string
}

export function SignUp() {
  const refOne = useRef<FormHandles>(null)
  const [load, setLoad] = React.useState(false)

  const { type } = useParams()
  const [step, setStepe] = useState(1)

  const [dadosStep1, setDadosStep1] = useState<Step1>({
    full_name: '',
    cpf: '',
    phone_area: '',
    phone_number: '',
    email: '',
    password: '',
  })

  const formRef = useRef<FormHandles>(null)
  const { signIn, signInP } = useAuth()
  const { addToast } = useToast()
  const nv = useNavigate()
  const [modal, setModal] = React.useState(false)

  const handleSubmit = useCallback(
    async (data: PropsSingUp) => {
      formRef.current?.setErrors({})
      setLoad(true)

      try {
        const passwordSchema = Yup.string()
          .required('Senha é obrigatória')
          .min(6, 'Mínimo de 6 digitos')

        const confirmationPasswordSchema = Yup.string()
          .oneOf([Yup.ref('password'), null], 'A senha não confere')
          .required('Confirmation password is required')

        const schema = Yup.object().shape({
          full_name: Yup.string().required('Informe seu nome completo'),
          email: Yup.string()
            .email('Informe um email válido')
            .required('E-mail é obrigatório'),
          cpf: Yup.string().required('CPF é obrigatório'),
          password: passwordSchema,
          confimationPassword: confirmationPasswordSchema,
        })

        const schema1 = Yup.object().shape({
          street: Yup.string().required('*'),
          home_number: Yup.number().required('*'),
          city: Yup.string().required('*'),
          locality: Yup.string().required('*'),
          postal_code: Yup.string().required('*'),
          region_code: Yup.string().required('*'),
          state: Yup.string()
            .uppercase('Estado deve ser com letras mausculas')
            .required('*'),
        })

        const dt = {
          full_name: dadosStep1.full_name,
          cpf: dadosStep1.cpf,
          phone_area: dadosStep1.phone_area,
          phone_number: dadosStep1.phone_number,
          email: dadosStep1.email,
          password: dadosStep1.password,
          street: data.street,
          locality: data.locality,
          home_number: data.home_number,
          city: data.city,
          state: data.state,
          region_code: data.region_code,
          postal_code: data.postal_code,
        }

        if (step === 1) {
          await schema.validate(data, {
            abortEarly: false,
          })

          await api
            .get(`/user/check-mail/${data.email}/${data.cpf}`)
            .then((h) => {
              setDadosStep1({
                full_name: data.full_name,
                cpf: data.cpf,
                phone_area: data.phone_area,
                phone_number: data.phone_number,
                email: data.email,
                password: data.password,
              })
              setStepe(2)

              setLoad(false)
            })
        }

        if (step === 2) {
          setLoad(true)
          await schema1.validate(data, {
            abortEarly: false,
          })

          await api.post('/user/create-user', dt).then((h) => {
            if (h.status === 200) {
              setModal(true)
              if (type === 'o') {
                signIn({
                  email: dt.email,
                  password: dt.password,
                }).then(() => {
                  setLoad(false)
                })
              } else {
                signInP({
                  email: dt.email,
                  password: dt.password,
                }).then(() => {
                  setLoad(false)
                })
              }
            }
          })
        }
      } catch (err: any) {
        setLoad(false)
        const msn = err.response?.data
          ? err.response.data.message
          : 'Ocorreu um erro ao realizar seu cadastro, verifique suas credenciais ou sua conexão com a rede'
        addToast({
          type: 'error',
          title: 'Erro ao realizar o cadastro',
          description: msn,
        })

        const errors = getValidationErrors(err)
        console.log(errors)
        formRef.current?.setErrors(errors)
      }
    },
    [addToast, dadosStep1, signIn, signInP, step, type],
  )

  const closeModal = React.useCallback(async () => {
    if (type === '0') {
      setModal(false)
      nv('/')
    } else {
      const data = localStorage.getItem('local')
      setModal(false)
      nv(`/plan/${data}`)
    }
  }, [nv, type])

  const preview = React.useCallback(async () => {
    if (step > 1) {
      setStepe(step - 1)
    }
  }, [step])

  console.log(type)

  return (
    <S.Container>
      <HeaderC type="1" />
      <Alert
        showModal={modal}
        type="sucess"
        closed={closeModal}
        title="Sucesso!"
        texto="Sua conta foi cadastrada com sucesso"
      />

      <S.content>
        <Form ref={formRef} style={{ width: '100%' }} onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <Input
                label="Nome completo"
                placeholder="Nome completo"
                name="full_name"
              />
              <Input label="E-mail" placeholder="Email" name="email" />

              <S.boxInput>
                <S.box style={{ width: 65 }}>
                  <Input
                    placeholder="(99)"
                    mask="number"
                    name="phone_area"
                    label="Área"
                  />
                </S.box>

                <S.box style={{ marginLeft: 10 }}>
                  <Input
                    label="Celular"
                    mask="number"
                    placeholder="Celular"
                    name="phone_number"
                  />
                </S.box>
              </S.boxInput>

              <S.box style={{ width: '60%' }}>
                <Input label="CPF" placeholder="CPF" name="cpf" />
              </S.box>
              <Input label="Senha" placeholder="Senha" name="password" />
              <Input
                label="Corfimação de senha"
                placeholder="Confirmar senha"
                name="confimationPassword"
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <Input label="Rua" placeholder="Nome da rua" name="street" />

              <S.boxInput>
                <S.box>
                  <Input
                    placeholder="Nº"
                    mask="number"
                    name="home_number"
                    label="Número"
                  />
                </S.box>
                <S.box style={{ marginLeft: 10, width: '100%' }}>
                  <Input
                    label="Bairro"
                    placeholder="Nome do seu bairro"
                    name="locality"
                  />
                </S.box>
              </S.boxInput>

              <S.boxInput>
                <S.box>
                  <Input label="Cidade" placeholder="Cidade" name="city" />
                </S.box>

                <S.box style={{ marginLeft: 10 }}>
                  <Input label="Estado" placeholder="Estado" name="state" />
                </S.box>

                <S.box style={{ width: 65, marginLeft: 10 }}>
                  <Input
                    placeholder="UF"
                    mask="text"
                    maxLength={2}
                    name="region_code"
                    label="UF"
                  />
                </S.box>
              </S.boxInput>

              <Input
                label="CEP"
                placeholder="Informe o seu CEP"
                name="postal_code"
                mask="cep"
              />
            </div>
          )}
          {step > 1 ? (
            <S.boxRow>
              <Button
                type="button"
                pres={preview}
                variant="AC"
                title="VOLTAR"
              />
              <Button variant="AB" load={load} title="PRÓXIMO" />
            </S.boxRow>
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button variant="AB" load={load} title="PRÓXIMO" />
            </div>
          )}
        </Form>
      </S.content>
    </S.Container>
  )
}
