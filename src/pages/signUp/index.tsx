import { useCallback, useRef, useState } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { api } from '../../services/api'
import * as S from './styles'
import * as Yup from 'yup'
import { HeaderC } from '../../components/HeaderC'
import { getValidationErrors } from '../../utils/getValidationErrors'
import { FormHandles } from '@unform/core'
import { useToast } from '../../context/ToastContext'

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

export function SignUp() {
  const [step, setStepe] = useState(1)
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()

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
          street: Yup.string().required(),
          bairro: Yup.string().required(),
          number_home: Yup.string().required(),
          city: Yup.string().required(),
          state: Yup.string().required(),
          cep: Yup.string().required(),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const dt = {
          name: data.name,
          email: data.email,
          password: data.password,
          midle_name: data.midle_name,
          street: data.street,
          bairro: data.bairro,
          number_home: data.number_home,
          city: data.city,
          state: data.state,
          cep: data.cep,
        }

        await api
          .post('/user/create-user', dt)
          .then((h) => {
            if (h.status === 200) {
              alert('Sucesso')
            }
          })
          .catch((h) => console.log(h.response.data.message, 'erro'))
      } catch (err: any) {
        addToast({
          type: 'error',
          title: 'Erro ao realizar o cadastro',
          description:
            'Ocorreu um erro ao realizar seu cadastro, verifique suas credenciais ou sua conexão com a rede',
        })

        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)
        console.log(err)
      }
    },
    [addToast],
  )

  return (
    <S.Container>
      <HeaderC type="3" />

      <h1>Crie sua conta Treepy</h1>
      <S.Content>
        {step === 1 && (
          <S.ContentForm onSubmit={handleSubmit}>
            <S.BoxForm>
              <S.Box1>
                <div className="content">
                  <Input placeholder="Nome" name="name" />
                  <Input placeholder="Sobrenome" name="midle_name" />
                </div>
                <Input placeholder="E-mail" name="email" />
                <Input placeholder="Senha" name="password" />
                <Input placeholder="Confirme sua senha" name="password" />
              </S.Box1>

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
                    <Input mask="cep" placeholder="CEP" name="cep" />
                  </div>
                  <Input placeholder="Cidade" name="city" />
                  <Input placeholder="Estado" name="state" />
                </div>
              </S.Box1>
              {/* </AnimetedForm> */}
            </S.BoxForm>
            <div className="buton">
              <Button variant="AC" title="CRIAR CONTA" />
            </div>
          </S.ContentForm>
        )}

        {step === 2 && (
          <S.ContentForm onSubmit={handleSubmit}>
            <S.BoxForm>
              <S.Box1>
                <div className="content">
                  <Input placeholder="Nome" name="name" />
                  <Input placeholder="Sobrenome" name="midle_name" />
                </div>
                <Input placeholder="E-mail" name="email" />
                <Input placeholder="Senha" name="password" />
                <Input placeholder="Confirme sua senha" name="password" />
              </S.Box1>

              {/* </AnimetedForm> */}
            </S.BoxForm>
            <div className="buton">
              <Button variant="AC" title="CRIAR CONTA" />
            </div>
          </S.ContentForm>
        )}
      </S.Content>
    </S.Container>
  )
}
