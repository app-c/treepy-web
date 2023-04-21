import React, {
  ErrorInfo,
  ReactNode,
  useCallback,
  useId,
  useRef,
  useState,
} from 'react'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { api } from '../../../services/api'
import * as S from './styles'
import * as Yup from 'yup'
import { HeaderC } from '../../../components/HeaderC'
import { getValidationErrors } from '../../../utils/getValidationErrors'
import { FormHandles } from '@unform/core'
import { useToast } from '../../../context/ToastContext'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../../context/authcontext'
import { Alert } from '../../../components/Alert'
import { CadastroStepOne } from '../../../components/cadastroSteps/stepOne'
import { CadastroStepTwo } from '../../../components/cadastroSteps/stepTwo'
import { useFormStep } from '../../../hooks/steps/useForm'
import { Form } from '@unform/web'
import { _validadeName } from '../../../utils/_validadeName'
import { StepsIcons } from '../../../components/cadastroSteps/stepsIcons'
import { FinshiSignUp } from '../../../components/cadastroSteps/finish'
import { _validarCPF } from '../../../utils/validateCpf'

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

interface Step2 {
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
  const [load, setLoad] = React.useState(false)

  const { type } = useParams()

  const [dataStep2, setDataStep2] = useState<Step2>({
    street: '',
    locality: '',
    home_number: '',
    city: '',
    state: '',
    region_code: '',
    postal_code: '',
  })

  const [dadosStep1, setDadosStep1] = useState<Step1>({
    full_name: '',
    cpf: '',
    phone_area: '',
    phone_number: '',
    email: '',
    password: '',
  })

  const key = useId()
  const components = [
    <CadastroStepOne key={key} />,
    <CadastroStepTwo key={key} />,
    <FinshiSignUp key={key} />,
  ]

  const { changeStep, currentComponent, lastStep, currentStep } = useFormStep({
    step: components,
  })

  const formRef = useRef<FormHandles>(null)
  const { signIn, signInP } = useAuth()
  const { addToast } = useToast()
  const nv = useNavigate()
  const [modal, setModal] = React.useState(false)

  const handleSubmit = useCallback(
    async (data: PropsSingUp) => {
      formRef.current?.setErrors({})

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
          home_number: Yup.string().required('*'),
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
          street: dataStep2.street,
          locality: dataStep2.locality,
          home_number: dataStep2.home_number,
          city: dataStep2.city,
          state: dataStep2.state,
          region_code: dataStep2.region_code.toUpperCase(),
          postal_code: dataStep2.postal_code,
        }

        if (currentStep === 0) {
          await schema.validate(data, {
            abortEarly: false,
          })

          if (!_validadeName(data.full_name)) {
            throw new Error('Insira seu nome conpleto')
          }

          if (!_validarCPF(data.cpf)) {
            throw new Error('Insira um cpf válido')
          }

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

              changeStep(currentStep + 1)

              setLoad(false)
            })
        }

        if (currentStep === 1) {
          await schema1.validate(data, {
            abortEarly: false,
          })

          setDataStep2({
            street: data.street,
            locality: data.locality,
            home_number: data.home_number,
            city: data.city,
            state: data.state,
            region_code: data.region_code,
            postal_code: data.postal_code,
          })

          changeStep(currentStep + 1)
        }

        if (currentStep === 2) {
          setLoad(true)
          await api.post('/user/create-user', dt).then((h) => {
            if (h.status === 200) {
              if (type === 'o') {
                signIn({
                  email: dt.email,
                  password: dt.password,
                }).then(() => {
                  setLoad(false)
                  nv('/')
                })
              } else {
                signInP({
                  email: dt.email,
                  password: dt.password,
                }).then(() => {
                  setLoad(false)
                  const data = localStorage.getItem('local')
                  nv(`/plan/${data}`)
                })
              }
            }
          })
        }
      } catch (err: any) {
        setLoad(false)

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
        formRef.current?.setErrors(errors)
      }
    },
    [
      addToast,
      changeStep,
      currentStep,
      dadosStep1,
      nv,
      dataStep2,
      signIn,
      signInP,
      type,
    ],
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
    changeStep(currentStep - 1)
    setLoad(false)
  }, [changeStep, currentStep])

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
        <StepsIcons currentStep={currentStep} />

        <Form
          initialData={{
            full_name: dadosStep1.full_name,
            email: dadosStep1.email,
            phone_area: dadosStep1.phone_area,
            phone_number: dadosStep1.phone_number,
            password: dadosStep1.password,
            cpf: dadosStep1.cpf,
            street: dataStep2.street,
            home_number: dataStep2.home_number,
            locality: dataStep2.locality,
            city: dataStep2.city,
            state: dataStep2.state,
            region_code: dataStep2.region_code.toUpperCase(),
            postal_code: dataStep2.postal_code,
          }}
          ref={formRef}
          style={{ width: '100%' }}
          onSubmit={handleSubmit}
        >
          {currentComponent}
          {currentStep > 0 ? (
            <S.boxRow>
              <Button
                type="button"
                pres={preview}
                variant="AC"
                title="VOLTAR"
              />
              <Button
                variant="AB"
                load={load}
                title={lastStep ? 'SALVAR' : 'PRÓXIMO'}
              />
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
