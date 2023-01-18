import { ColorModeContext } from '@chakra-ui/react'
import { Form } from '@unform/web'
import React, { useCallback, useState } from 'react'
import { api } from '../../services/api'
import { Button } from '../Button'
import { CardType } from '../CardType'
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
  tree: number
}

export function Card({ amount, tree }: Props) {
  const [select, setSelect] = useState<PropsSelect>({ type: 'cartao' })

  const [numberCard, setNumberCard] = React.useState('')
  const [name, setName] = React.useState('')
  const [expMonth, setExpMonth] = React.useState('')
  const [expYear, setExpYear] = React.useState('')
  const [brand, setBrand] = React.useState('')
  const [securityCode, setSecurityCode] = React.useState('')
  console.log(tree)

  const handleSubmitPayment = useCallback(async (data: object) => {}, [])

  const handleBuy = useCallback(async () => {
    await api.post('/pag').then((h) => console.log(h.data))

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

  const dataCard = {
    number: numberCard,
    name,
    month: expMonth,
    year: expYear,
    security: securityCode,
    brand,
  }

  React.useEffect(() => {
    if (numberCard.length >= 6) {
      let appId = ''

      api.post('/pay-pag/session').then((h) => {
        const parser = new DOMParser()
        const xml = parser.parseFromString(h.data, 'text/xml')
        appId = xml.lastChild?.firstChild?.textContent || ''
        api
          .post('/pay-pag/brand', {
            tk: appId,
            creditCard: numberCard,
          })
          .then((h) => {
            const rs = h.data
            console.log(rs.bin)
            setBrand(rs.bin.brand.name)
          })
      })
    }
  }, [numberCard])

  return (
    <Container>
      <Form onSubmit={handleBuy}>
        <div className="content">
          <BoxItem>
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

            <div className="item">
              <span>TreepyCash</span>
              <p>R$ {amount.toFixed(2)}</p>
              <p>arvores {tree.toFixed(2)}</p>
              <Form onSubmit={() => {}}>
                <Input
                  label="Pagar parte do valor"
                  sizeW="50%"
                  name="partial"
                />
              </Form>

              <CardType infoCard={dataCard} />
            </div>
          </BoxItem>

          <div className="selection">
            {select.type === 'cartao' && (
              <BoxCard>
                <ContentCard>
                  <Boxform>
                    <Input
                      onChange={(h) => setNumberCard(h.currentTarget.value)}
                      name="number"
                      type="text"
                      placeholder="Digite o número do cartão"
                    />

                    <div className="content">
                      <Input
                        maxLength={2}
                        onChange={(h) => setExpMonth(h.currentTarget.value)}
                        name="exp_month"
                        className="data"
                        type="text"
                        placeholder="Mês"
                      />

                      <Input
                        maxLength={2}
                        onChange={(h) => setExpYear(h.currentTarget.value)}
                        name="exp_year"
                        placeholder="Ano"
                      />
                      <Input
                        onChange={(h) => setSecurityCode(h.currentTarget.value)}
                        name="security_code"
                        placeholder="csv"
                      />
                    </div>
                    <Input
                      onChange={(h) => setName(h.currentTarget.value)}
                      name="holder"
                      placeholder="Nome do titular"
                    />
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
