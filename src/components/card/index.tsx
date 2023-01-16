import { Form } from '@unform/web'
import { useCallback, useState } from 'react'
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
  amount: number
}

export function Card({ amount }: Props) {
  const [select, setSelect] = useState<PropsSelect>({ type: 'cartao' })

  const handleSubmitPayment = useCallback(async (data: object) => {}, [])

  const handleBuy = useCallback(async () => {
    console.log('compra1')

    const data = {
      reference_id: 'ex-00001',
      description: 'Motivo do pagamento',
      amount: {
        value: 1000,
        currency: 'BRL',
      },
      payment_method: {
        type: 'CREDIT_CARD',
        installments: 1,
        capture: false,
        soft_descriptor: 'My Store',
        card: {
          number: '4929291898380766',
          exp_month: '12',
          exp_year: '2026',
          security_code: '123',
          holder: {
            name: 'Jose da Silva',
          },
        },
      },
      notification_urls: [
        'https://yourserver.com/nas_ecommerce/277be731-3b7c-4dac-8c4e-4c3f4a1fdc46/',
      ],
    }

    // await pagSeg
    //   .post('/orders', data)
    //   .then((h) => console.log(h.data(), 'sucesso'))
    //   .catch((h) => console.log(h.response))
  }, [])

  return (
    <Container>
      <Form onSubmit={handleSubmitPayment}>
        <div className="content">
          <BoxItem>
            <div className="item">
              <span>TreepyCash</span>
              <p>R$ {amount}</p>
              <Form>
                <Input
                  label="Pagar parte do valor"
                  sizeW="50%"
                  name="partial"
                />
              </Form>
            </div>

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

          <div className="selection">
            {select.type === 'cartao' && (
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
            )}

            {select.type === 'boleto' && (
              <BoxCard>
                <h1>hello</h1>
              </BoxCard>
            )}

            {select.type === 'pix' && (
              <BoxCard>
                <h1>pix</h1>
              </BoxCard>
            )}
          </div>
        </div>

        <Button title="Finalizar compra" variant="B" />
      </Form>
    </Container>
  )
}
