import { Form } from '@unform/web'
import { Button } from '../Button'
import { Input } from '../Input'
import { Container, Content } from './styles'

import * as Yup from 'yup'
import { useCallback, useRef } from 'react'
import { FormHandles } from '@unform/core'
import { getvalidationErrors } from '../../utils/getValidationErrors'

interface DataProps {
  name: string
  email: string
}

interface Props {
  setStep: (item: number) => void
  dataPerson: (item: DataProps) => void
}
export function DataPerson({ setStep }: Props) {
  const forRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(
    async (data: DataProps) => {
      setStep(2)
    },
    [setStep],
  )

  return (
    <Container>
      <h1>Dados pessoais</h1>

      <Form ref={forRef} onSubmit={handleSubmit}>
        <Content>
          <div className="person">
            <Input name="nome" />
            <Input name="email" />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Input name="area" />
              <Input name="phone" />
            </div>
          </div>
          <div className="localy">
            <Input name="locality" />
            <Input name="street" />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Input name="number" />
              <Input name="complement" />
            </div>
            <Input name="city" />

            <Input name="region" />
            <Input name="country" />
            <Input name="postal_code" />
          </div>
        </Content>

        <Button variant="AB" type="submit" title="CONTINUAR" />
      </Form>
    </Container>
  )
}
