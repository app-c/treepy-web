import { Form } from '@unform/web'
import { Button } from '../Button'
import { Input } from '../Input'
import { Container, Content } from './styles'

import { useCallback, useRef } from 'react'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import { getValidationErrors } from '../../utils/getValidationErrors'

interface DataProps {
  name: string
  email: string
  locality: string
  street: string
  number: string
  complement: string
  city: string
  region: string
  country: string
  postal_code: string
  area: string
}

interface Props {
  setStep: (item: number) => void
  dataPerson: (item: DataProps) => void
}

export function DataPerson({ setStep, dataPerson }: Props) {
  const forRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(
    async (data: DataProps) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('nome obrigatório'),
          email: Yup.string()
            .required('email obrigatório')
            .email('digite um email válido'),
          locality: Yup.string().required('bairro obrigatório'),
          street: Yup.string().required('rua obrigatório'),
          phone: Yup.string().required('número obrigatório'),
          complement: Yup.string(),
          city: Yup.string().required('cidade obrigatório'),
          region: Yup.string().required('estado obrigatório'),
          postal_code: Yup.string().required(),
          area: Yup.string().required('dd obrigatório'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        setStep(2)
        dataPerson(data)
      } catch (error: any) {
        const err = getValidationErrors(error)
        forRef.current?.setErrors(err)
      }
    },
    [dataPerson, setStep],
  )

  return (
    <Container>
      <h1>Dados do titular</h1>

      <Form ref={forRef} onSubmit={handleSubmit}>
        <Content>
          <div className="person">
            <Input name="name" placeholder="digite seu nome" />
            <Input name="email" placeholder="digite seu email" />

            <div
              style={{
                display: 'flex',
                width: '70%',
                justifyContent: 'space-between',
              }}
            >
              <Input
                maxLength={2}
                mask="number"
                sizeW="5rem"
                name="area"
                placeholder="(xx)"
              />
              <Input
                maxLength={9}
                sizeW="9rem"
                mask="number"
                name="phone"
                placeholder="telefone"
              />
            </div>
            <Input name="locality" placeholder="bairro" />
            <Input name="street" placeholder="rua" />
          </div>

          <div className="localy">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Input
                sizeW="6rem"
                mask="number"
                name="number"
                placeholder="número"
              />
              <Input sizeW="8rem" name="complement" placeholder="complemento" />
            </div>
            <Input name="city" placeholder="cidade" />

            <Input maxLength={2} name="region" placeholder="estado" />
            <Input mask="cep" name="postal_code" placeholder="CEP" />
          </div>
        </Content>

        <Button sizeH="2.2rem" variant="AB" type="submit" title="CONTINUAR" />
      </Form>
    </Container>
  )
}
