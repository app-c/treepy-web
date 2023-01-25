import { Form } from '@unform/web'
import { Button } from '../Button'
import { Input } from '../Input'
import * as Dialog from '@radix-ui/react-dialog'
import {
  BoxCard,
  BoxDialog,
  Boxform,
  BoxItem,
  BoxSelect,
  Closed,
  Container,
  ContainerCard,
  Content,
  ContentCard,
  ContentDialog,
  Overlay,
} from './styles'

import React, { useCallback, useRef } from 'react'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import { getValidationErrors } from '../../utils/getValidationErrors'
import { api } from '../../services/api'
import { CardType } from '../CardType'
import { useToast } from '../../context/ToastContext'

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
  holder: string
  expire: string
  security_code: string
}

interface Props {
  setStep: (item: number) => void
  data: (item: DataProps) => void
  Component?: any
  amount: number
  tree: number
}

export function DataPerson({
  setStep,
  dataPerson,
  amount,
  tree,
  Component,
}: Props) {
  const forRef = useRef<FormHandles>(null)
  const refContainer = useRef<any>(null)

  React.useEffect(() => {
    console.log(refContainer)
  }, [])

  const { addToast } = useToast()

  const [numberCard, setNumberCard] = React.useState('')
  const [name, setName] = React.useState('')
  const [expMonth, setExpMonth] = React.useState('')
  const [expYear, setExpYear] = React.useState('')
  const [brand, setBrand] = React.useState('')
  const [securityCode, setSecurityCode] = React.useState('')
  const [qntParcela, setQntParce] = React.useState('')

  const [user, setUser] = React.useState<object>()

  React.useEffect(() => {
    const rs = localStorage.getItem('@treepy:step1')

    setUser(JSON.parse(rs))
  }, [])

  const handleSubmit = useCallback(
    async (data: DataProps) => {
      forRef.current?.setErrors({})

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
          holder: Yup.string().required(),
          expire: Yup.string().required(),
          security_code: Yup.string().required(),
          area: Yup.string().required('dd obrigatório'),
        })

        console.log(data)

        await schema.validate(data, {
          abortEarly: false,
        })

        // dataPerson(data)
      } catch (error: any) {
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro ao fazer login, verifique suas credenciais',
        })

        const err = getValidationErrors(error)
        forRef.current?.setErrors(err)
      }
    },
    [dataPerson],
  )

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
      const appId = ''

      // api.post('/pay-pag/session').then((h) => {
      //   const parser = new DOMParser()
      //   const xml = parser.parseFromString(h.data, 'text/xml')
      //   appId = xml.lastChild?.firstChild?.textContent || ''
      //   api
      //     .post('/pay-pag/brand', {
      //       tk: appId,
      //       creditCard: numberCard,
      //     })
      //     .then((h) => {
      //       const rs = h.data
      //       console.log(rs.bin)
      //       setBrand(rs.bin.brand.name)
      //     })
      // })
    }
  }, [numberCard])

  const parcelas = [1, 2, 3, 4]

  return (
    <Container ref={refContainer}>
      <h1>{user?.name}</h1>
      <Form style={{ width: '100%' }} ref={forRef} onSubmit={handleSubmit}>
        <Content>
          <div className="person">
            <h2>Dados do comprador</h2>
            <Input name="name" placeholder="digite seu nome" />
            <Input name="email" placeholder="digite seu email" />

            <div className="box">
              <div>
                <Input
                  maxLength={2}
                  mask="number"
                  sizeW="4rem"
                  name="area"
                  placeholder="(xx)"
                />
              </div>

              <div className="marg">
                <Input
                  maxLength={9}
                  sizeW="9rem"
                  mask="number"
                  name="phone"
                  placeholder="telefone"
                />
              </div>
            </div>
          </div>

          <div className="localy">
            <h3>Endereço do comprador</h3>

            <div className="box">
              <Input name="street" placeholder="rua" />

              {/* <Input
                sizeW="5rem"
                mask="number"
                name="number"
                placeholder="Nº"
              /> */}
            </div>

            <div className="box">
              <div>
                <Input sizeW="24rem" name="locality" placeholder="bairro" />
              </div>

              <div className="marg">
                <Input
                  sizeW="8rem"
                  name="complement"
                  placeholder="complemento"
                />
              </div>
            </div>
            <Input name="city" placeholder="cidade" />

            <div className="box">
              <Input
                sizeW="6rem"
                maxLength={2}
                name="region"
                placeholder="estado"
              />

              <div className="marg">
                <Input mask="cep" name="postal_code" placeholder="CEP" />
              </div>
            </div>
          </div>
        </Content>

        <ContainerCard>
          <div className="content">
            <BoxCard>
              <h3>Dados do cartão</h3>
              <ContentCard>
                <Boxform>
                  <Input
                    onChange={(h) => setName(h.currentTarget.value)}
                    name="holder"
                    placeholder="Nome do titular"
                  />
                  <Input
                    onChange={(h) => setNumberCard(h.currentTarget.value)}
                    name="number"
                    type="text"
                    placeholder="Digite o número do cartão"
                  />

                  <div className="content">
                    <Input
                      maxLength={5}
                      onChange={(h) => setExpMonth(h.currentTarget.value)}
                      name="expire"
                      label="Validade"
                      placeholder="mês/ano"
                      mask="expire"
                      sizeW="6rem"
                    />

                    <Input
                      onChange={(h) => setSecurityCode(h.currentTarget.value)}
                      name="security_code"
                      placeholder="cvv"
                      label="CVV do cartão"
                      mask="number"
                      maxLength={3}
                    />

                    <div className="selectparc">
                      <span className="prc">Parcelas</span>
                      <BoxSelect
                        onChange={(h) => setQntParce(h.currentTarget.value)}
                        name="qntParcela"
                        value={qntParcela}
                      >
                        {parcelas.map((h) => (
                          <option key={h} value={h}>
                            {h}
                          </option>
                        ))}
                      </BoxSelect>
                    </div>
                  </div>
                </Boxform>
              </ContentCard>
            </BoxCard>

            <BoxItem>
              {/* <CardType infoCard={dataCard} /> */}
              <h3>Informçoes da compra</h3>
              <span>TreepyCash</span>
              <p>R$ {amount.toFixed(2)}</p>

              <p>arvores {tree.toFixed(2)}</p>
              <div className="item"></div>
            </BoxItem>
          </div>
        </ContainerCard>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button
              sizeH="2.2rem"
              variant="AB"
              type="submit"
              title="FINALIZAR COMPRA"
            />
          </Dialog.Trigger>

          <Dialog.Portal>
            <Overlay />

            <ContentDialog>
              <h2>Adicionar transporte</h2>

              <BoxDialog>
                <Closed>
                  <Button variant="C" title="CANCELAR" />
                </Closed>
              </BoxDialog>
            </ContentDialog>
          </Dialog.Portal>
        </Dialog.Root>
      </Form>
    </Container>
  )
}
