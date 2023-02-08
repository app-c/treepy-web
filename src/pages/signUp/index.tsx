import { useCallback } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { api } from '../../services/api'
import * as S from './styles'
import * as Yup from 'yup'

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
  const handleSubmit = useCallback(async (data: PropsSingUp) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required('nome obrigatorio'),
        password: Yup.string().min(6, 'senha minimo 6 digitos'),
        name: Yup.string().required(),
        midle_name: Yup.string().required(),
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
    } catch (error) {}
    console.log(data)
  }, [])

  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.ContentForm onSubmit={handleSubmit}>
          <S.BoxForm>
            <S.Box1>
              <div className="content">
                <Input placeholder="Nome" name="name" />
                <Input placeholder="Sobrenome" name="midle_name" />
              </div>
              <Input placeholder="E-mail" name="email" />
              <Input placeholder="Senha" name="password" />
              <Input placeholder="Rua" name="street" />
            </S.Box1>

            <S.Box2>
              <div className="end">
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
            </S.Box2>
            {/* </AnimetedForm> */}
          </S.BoxForm>
          <div className="buton">
            <Button variant="AC" title="CRIAR CONTA" />
          </div>
        </S.ContentForm>
      </S.Content>
    </S.Container>
  )
}
