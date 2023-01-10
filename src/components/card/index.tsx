import { Form } from '@unform/web'
import { useCallback, useState } from 'react'
import { PersonCardProps, Shipping } from '../../Dto'
import { pagSeg } from '../../services/api'
import { Button } from '../Button'
import { Input } from '../Input'
import { Selector } from '../selector'
import {
  BoxCard,
  Boxform,
  BoxItem,
  BoxItens,
  Container,
  ContentCard,
} from './styles'

interface PropsSelect {
  type: 'cartao' | 'boleto' | 'pix'
}

interface Props {
  itemPersonal: object
}

export function Card({ itemPersonal }: Props) {
  const [select, setSelect] = useState<PropsSelect>({ type: 'cartao' })

  const handleSubmitPayment = useCallback(async (data: object) => {
    await pagSeg
      .post('/orders', data)
      .then((h) => console.log(h.data))
      .catch((h) => console.log(h.response))
  }, [])

  return (
    <Container>
      <Form onSubmit={handleSubmitPayment}>
        <div className="content">
          <BoxItem>
            <span>TreepyCash</span>
            <p>R$ 490,00</p>

            <BoxItens>
              <Selector
                pres={() => setSelect({ type: 'cartao' })}
                title="CARTÃO"
                selected={select.type === 'cartao'}
              />
              <Selector
                pres={() => setSelect({ type: 'boleto' })}
                title="BOLETO"
                selected={select.type === 'boleto'}
              />
              <Selector
                pres={() => setSelect({ type: 'pix' })}
                title="PIX"
                selected={select.type === 'pix'}
              />
            </BoxItens>
          </BoxItem>

          <div>
            {select.type === 'cartao'}
            <BoxCard>
              <ContentCard>
                <Boxform>
                  <Input name="number" type="text" />

                  <div className="content">
                    <Input name="exp_month" className="data" type="text" />

                    <Input name="exp_year" />
                    <Input name="security_code" />
                  </div>
                  <Input name="holder" />
                </Boxform>
              </ContentCard>
            </BoxCard>
          </div>
        </div>

        <Button title="Finalizar compra" variant="B" />
      </Form>
    </Container>
  )
}
