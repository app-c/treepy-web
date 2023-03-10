import { useCallback, useRef, useState } from 'react'
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
import { useNavigate } from 'react-router-dom'
import { DataPerson } from '../../../components/dataPerson'

export interface PropsSingUp {
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

interface Step1 {
  name: string
  midle_name: string
  email: string
  password: string
}

export function SignUpPay() {
  const [step, setStepe] = useState(1)
  const [dadosStep1, setDadosStep1] = useState<Step1>({
    name: '',
    midle_name: '',
    email: '',
    password: '',
  })
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const nv = useNavigate()

  const [load, setLoad] = useState(false)
  const [dados, setDados] = useState<PropsSingUp>()

  const handleSubmit = useCallback(
    async (data: PropsSingUp) => {
      formRef.current?.setErrors({})
      setLoad(true)

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
          number_home: Yup.number().required(),
          city: Yup.string().required(),
          bairro: Yup.string().required(),
          state: Yup.string()
            .uppercase()
            .required('Estado deve ser com letras mausculas'),
          cep: Yup.string().required().min(9),
        })

        const dt = {
          name: dadosStep1.name,
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

          setStepe(2)
          setDadosStep1({
            name: data.name,
            midle_name: data.midle_name,
            email: data.email,
            password: data.password,
          })
          setLoad(false)
        }

        if (step === 2) {
          setLoad(true)
          await schema1.validate(data, {
            abortEarly: false,
          })

          await api.post('/user/create-user', dt).then((h) => {
            if (h.status === 200) {
              alert('Sucesso')
              setLoad(false)
            }
          })

          setDados(dt)
          setStepe(3)
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
    [
      addToast,
      dadosStep1.email,
      dadosStep1.midle_name,
      dadosStep1.name,
      dadosStep1.password,
      step,
    ],
  )

  console.log(step)

  return (
    <S.Container>
      <HeaderC type="1" />
      {step === 3 ? (
        <h2>Forma de pagamento</h2>
      ) : (
        <h2>Crie sua conta Treepy</h2>
      )}
      <S.Content>
        {step === 1 && (
          <S.ContentForm ref={formRef} onSubmit={handleSubmit}>
            <S.Box1>
              <div className="content">
                <Input label="Nome" placeholder="Nome" name="name" />
                <Input
                  label="Sobrenome"
                  placeholder="Sobrenome"
                  name="midle_name"
                />
              </div>
              <Input label="Email" placeholder="E-mail" name="email" />
              <Input label="Senha" placeholder="Senha" name="password" />
              <Input
                label="Confirmaçao de senha"
                placeholder="Confirme sua senha"
                name="confimationPassword"
              />
            </S.Box1>
            <S.button>
              {load ? <Loading /> : <Button variant="AC" title="PRÓXIMO" />}
            </S.button>

            {/* </AnimetedForm> */}
          </S.ContentForm>
        )}

        {step === 2 && (
          <S.ContentForm ref={formRef} onSubmit={handleSubmit}>
            <S.Box1>
              <div className="end">
                <Input placeholder="Rua" name="street" />
                <Input placeholder="Bairro" name="bairro" />

                <div className="content">
                  <Input
                    mask="number"
                    placeholder="Numero"
                    name="number_home"
                  />
                  <Input
                    maxLength={9}
                    mask="cep"
                    placeholder="CEP"
                    name="cep"
                  />
                </div>
                <Input placeholder="Cidade" name="city" />
                <Input maxLength={2} placeholder="Estado" name="state" />
              </div>
            </S.Box1>

            {/* </AnimetedForm> */}
            <S.button>
              {load ? <Loading /> : <Button variant="AC" title="CRIAR CONTA" />}
            </S.button>
          </S.ContentForm>
        )}

        {step === 3 && (
          <S.Box2>
            <DataPerson amount={10} tree={10} />
          </S.Box2>
        )}
      </S.Content>
    </S.Container>
  )
}
