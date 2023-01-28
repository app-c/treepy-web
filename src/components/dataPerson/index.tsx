import { Form } from '@unform/web'
import { Button } from '../Button'
import { Input } from '../Input'
import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'

import React, { useCallback, useRef } from 'react'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import { getValidationErrors } from '../../utils/getValidationErrors'
import { api } from '../../services/api'
import { CardType } from '../CardType'
import { useToast } from '../../context/ToastContext'
import { PropsSingUp } from '../../pages/signUpPay'
import { Selector } from '../selector'

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
  setStep?: (item: number) => void
  data?: PropsSingUp
  Component?: any
  amount: number
  tree: number
}

interface SelectProps {
  type: 'cartao' | 'pix' | 'boleto'
}

export function DataPerson({ setStep, data, amount, tree, Component }: Props) {
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

  const [select, setSelect] = React.useState<SelectProps>({ type: 'cartao' })

  const [user, setUser] = React.useState<object>()

  React.useEffect(() => {}, [])

  console.log(data)

  const handleSubmit = useCallback(async (data: DataProps) => {
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

  console.log(data)

  return (
    <S.Container ref={refContainer}>
      <S.BoxSelector>
        <Selector
          selected={select.type === 'cartao'}
          title="Cartão"
          pres={() => setSelect({ type: 'cartao' })}
        />

        <Selector
          selected={select.type === 'pix'}
          title="PIX"
          pres={() => setSelect({ type: 'pix' })}
        />

        <Selector
          selected={select.type === 'boleto'}
          title="boleto"
          pres={() => setSelect({ type: 'boleto' })}
        />
      </S.BoxSelector>
      <Form
        initialData={data}
        style={{ width: '100%' }}
        ref={forRef}
        onSubmit={handleSubmit}
      >
        <S.Content>
          <div className="person">
            <h3>Dados do comprador</h3>
            <Input label="Nome" name="name" placeholder="digite seu nome" />
            <Input name="email" label="E-mail" placeholder="digite seu email" />

            <S.Box>
              <Input
                maxLength={2}
                mask="number"
                name="area"
                placeholder="(xx)"
              />

              <Input
                maxLength={9}
                mask="number"
                name="phone"
                placeholder="telefone"
              />
            </S.Box>
          </div>

          <div className="localy">
            <h3>Endereço do comprador</h3>

            <S.Box>
              <Input label="Rua" name="street" placeholder="rua" />

              <Input label="N°" mask="number" name="number" placeholder="Nº" />
            </S.Box>

            <S.Box>
              <Input label="Bairro" name="locality" placeholder="bairro" />

              <Input
                label="Complemento"
                name="complement"
                placeholder="complemento"
              />
            </S.Box>

            <Input name="city" placeholder="cidade" />

            <S.Box>
              <Input
                maxLength={2}
                name="region"
                placeholder="estado"
                label="Estado"
              />

              <Input
                label="CEP"
                mask="cep"
                name="postal_code"
                placeholder="CEP"
              />
            </S.Box>
          </div>
        </S.Content>

        <S.ContainerCard>
          {select.type === 'cartao' && (
            <div className="content">
              <S.BoxCard>
                <h3>Dados do cartão</h3>
                <S.ContentCard>
                  <S.Boxform>
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
                        <S.BoxSelect
                          onChange={(h) => setQntParce(h.currentTarget.value)}
                          name="qntParcela"
                          value={qntParcela}
                        >
                          {parcelas.map((h) => (
                            <option key={h} value={h}>
                              {h}
                            </option>
                          ))}
                        </S.BoxSelect>
                      </div>
                    </div>
                  </S.Boxform>
                </S.ContentCard>
              </S.BoxCard>

              <S.BoxItem>
                {/* <CardType infoCard={dataCard} /> */}
                <h3>Resumo da compra</h3>
                <span>Treepycash</span>
                <p>R$ {amount.toFixed(2)}</p>

                <p>arvores {tree.toFixed(2)}</p>
                <div className="item"></div>
              </S.BoxItem>
            </div>
          )}
        </S.ContainerCard>

        <Button
          sizeH="2.2rem"
          variant="AB"
          type="submit"
          title="FINALIZAR COMPRA"
        />
      </Form>
    </S.Container>
  )
}
