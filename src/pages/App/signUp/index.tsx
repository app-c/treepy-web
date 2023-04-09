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
  bairro: string
  number_home: string
  city: string
  state: string
  cep: string
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

      console.log(data)

      try {
        const passwordSchema = Yup.string().required('Password is required')

        const confirmationPasswordSchema = Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirmation password is required')

        const schema = Yup.object().shape({
          full_name: Yup.string().required(),
          email: Yup.string().email().required('nome obrigatorio'),
          cpf: Yup.string().required('Infore se cpf'),
          password: passwordSchema,
          confimationPassword: confirmationPasswordSchema,
        })

        const schema1 = Yup.object().shape({
          street: Yup.string().required(),
          number_home: Yup.number().required(),
          city: Yup.string().required(),
          bairro: Yup.string().required(),
          state: Yup.string()
            .uppercase()
            .required('Estado deve ser com letras mausculas'),
          cep: Yup.string().required().min(9),
        })

        const dt = {
          full_name: dadosStep1.name,
          midle_name: dadosStep1.midle_name,
          email: dadosStep1.email,
          password: dadosStep1.password,
          street: data.street,
          bairro: data.bairro,
          number_home: data.number_home,
          city: data.city,
          state: data.state,
          cep: data.cep,
        }

        if (step === 1) {
          await schema.validate(data, {
            abortEarly: false,
          })

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
      redirect('/dash')
    } else {
      setModal(false)
      nv('/calc')
    }
  }, [nv, type])

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
        <Form style={{ width: '100%' }} ref={refOne} onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <Input placeholder="Nome completo" name="name" />
              <Input placeholder="Email" name="name" />

              <S.boxInput>
                <Input
                  placeholder="(99)"
                  mask="number"
                  name="name"
                  style={{ width: 50 }}
                />
                <S.box>
                  <Input mask="number" placeholder="Celular" name="name" />
                </S.box>
              </S.boxInput>
              <Input placeholder="CPF" name="cpf" />
              <Input placeholder="Senha" name="password" />
              <Input placeholder="Confirmar senha" name="confirmPass" />
            </div>
          )}
        </Form>
        <S.boxRow>
          <Button pres={() => setStepe(step - 1)} title="VOLTAR" />
          <Button load={load} title="PRÓXIMO" pres={() => setStepe(step + 1)} />
        </S.boxRow>
      </S.content>
    </S.Container>
  )
}
