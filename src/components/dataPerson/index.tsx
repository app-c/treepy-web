/* eslint-disable camelcase */
import { Form } from '@unform/web'
import { Button } from '../Button'
import { Input } from '../Input'
import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'

import React, { useCallback, useRef } from 'react'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import { getValidationErrors } from '../../utils/getValidationErrors'
import { api, pag } from '../../services/api'
import { useToast } from '../../context/ToastContext'
import { Selector } from '../selector'
import { IPropsBrand, IPropsParcelamento, PropsUser } from '../../Dto'
import { Loading } from '../Loading'
import { brlNumber, _number } from '../../utils/formatNumber'
import Modal from 'react-modal'
import { Alert } from '../Alert'

interface DataProps {
  name: string
  email: string
  area: string
  phone_number: string
  amount: number
  street: string
  home_number: string
  complement: string
  locality: string
  city: string
  region_code: string
  country: string
  postal_code: string
  installments: number
  holder_name: string
  number_card: string
  expire: string
  security_code: string
}

interface Props {
  setStep?: (item: number) => void
  Component?: any
  amount: number
  tree: number
}

interface SelectProps {
  type: 'cartao' | 'pix' | 'boleto'
}

interface PropsMosal {
  show: boolean
  status: 'DECLINED' | 'PAID' | null
}

export function DataPerson({ setStep, amount, tree, Component }: Props) {
  const forRef = useRef<FormHandles>(null)
  const refContainer = useRef<any>(null)

  // const card = PagSeguro.encryptCard({
  //   publicKey: 'PUBE8042CBE5AF149459191702768A7074C',
  //   holder: 'Nome Sobrenome',
  //   number: '4242424242424242',
  //   expMonth: '12',
  //   expYear: '2030',
  //   securityCode: '123',
  // })

  // const encrypted = card.encryptedCard
  // console.log(card.errors[0].message, encrypted)

  const { addToast } = useToast()

  const [numberCard, setNumberCard] = React.useState('')
  const [name, setName] = React.useState('')
  const [expMonth, setExpMonth] = React.useState('')
  const [expYear, setExpYear] = React.useState('')
  const [brand, setBrand] = React.useState('')
  const [securityCode, setSecurityCode] = React.useState('')
  const [installments, setInstalments] = React.useState('1')
  const [responseBrand, setResponseBrand] = React.useState<IPropsBrand>()
  const [showMoal, setShowModal] = React.useState<PropsMosal>({
    show: false,
    status: null,
  })

  const [parc, setParc] = React.useState<IPropsParcelamento>()
  const [load, setLoad] = React.useState(false)
  const [qrCodePix, setQrCodePix] = React.useState('')

  const [select, setSelect] = React.useState<SelectProps>({ type: 'cartao' })

  const [user, setUser] = React.useState<PropsUser>()

  const loadData = React.useCallback(async () => {
    await api
      .get('/user/find-user')
      .then((h) => {
        const rs = h.data
        setUser(rs)
      })
      .catch((h) => console.log(h.response))
  }, [])

  // React.useEffect(() => {
  //   if (numberCard.length > 5) {
  //     pag.post('/session').then((h) => {
  //       const rs = h.data
  //       const id = rs.session.id[0]
  //       pag
  //         .post('/brand', {
  //           tk: id,
  //           creditCard: numberCard,
  //         })
  //         .then((h) => {
  //           const brand = h.data as IPropsBrand
  //           const bandera = brand.bin.brand.name
  //           pag
  //             .post('/parc', {
  //               installment: 10,
  //               creditCardBrand: brand.bin.brand.name,
  //               maxInstallmentNoInterest: 10,
  //               sessionId: id,
  //               amount: '1000.00',
  //             })
  //             .then((h) => {
  //               const rs = h.data as IPropsParcelamento
  //             })
  //         })
  //     })
  //   }
  // }, [numberCard])

  React.useEffect(() => {
    loadData()
  }, [])

  const handleSubmit = useCallback(
    async (data: DataProps) => {
      forRef.current?.setErrors({})

      const vl = _number(amount.toFixed(2))
      const total_amount = Number(vl)
      const postal_code = Number(_number(data.postal_code))
      const region_code = data.region_code.toUpperCase()
      const number_card = Number(_number(data.number_card))

      switch (select.type) {
        case 'cartao':
          try {
            setLoad(true)

            const schema = Yup.object().shape({
              name: Yup.string().required('nome obrigatório'),
              email: Yup.string()
                .required('email obrigatório')
                .email('digite um email válido'),
              locality: Yup.string().required('bairro obrigatório'),
              street: Yup.string().required('rua obrigatório'),
              phone_number: Yup.string().required('número obrigatório'),
              complement: Yup.string().required(),
              city: Yup.string().required('cidade obrigatório'),
              region_code: Yup.string().required('estado obrigatório'),
              postal_code: Yup.string().required(),

              holder_name: Yup.string().required(),
              expire: Yup.string().required(),
              security_code: Yup.string().required(),
              area: Yup.string().required('dd obrigatório'),
            })

            await schema.validate(data, {
              abortEarly: false,
            })

            const [month, year] = data.expire.split('/').map(String)

            const pag = {
              name: data.name,
              email: data.email,
              area: data.area,
              phone_number: data.phone_number,
              name_item: 'Treepycach',
              reference_item_id: new Date().getTime(),
              amount: total_amount,
              street: data.street,
              home_number: data.home_number,
              complement: data.complement,
              locality: data.locality,
              city: data.city,
              region_code,
              postal_code,
              description: `Produto adiquirido: ${tree}, no valor total de R$ ${total_amount}`,

              installments: Number(installments),
              number_card,
              exp_month: month,
              exp_year: `20${year}`,
              security_code: data.security_code,
              holder_name: data.holder_name,
            }

            await api.post('/pay-pag/card', pag).then((h) => {
              setLoad(false)
              const rs = h.data

              const status = rs.charges[0]?.status
              console.log(status)
              if (status === 'DECLINED') {
                setShowModal({ show: true, status: 'DECLINED' })
              }

              if (status === 'PAID') {
                setShowModal({ show: true, status: 'PAID' })
              }
            })
          } catch (error: any) {
            setLoad(false)
            console.log(error)
            addToast({
              type: 'error',
              title: 'Erro',
              description:
                'Ocorreu um erro, verifique os campos e tente novamente',
            })

            const err = getValidationErrors(error)
            forRef.current?.setErrors(err)
          }

          break

        case 'pix':
          try {
            setLoad(true)

            const schema = Yup.object().shape({
              name: Yup.string().required('nome obrigatório'),
              email: Yup.string()
                .required('email obrigatório')
                .email('digite um email válido'),
              locality: Yup.string().required('bairro obrigatório'),
              street: Yup.string().required('rua obrigatório'),
              phone_number: Yup.string().required('número obrigatório'),
              complement: Yup.string().required(),
              city: Yup.string().required('cidade obrigatório'),
              region_code: Yup.string().required('estado obrigatório'),
              postal_code: Yup.string().required(),
              area: Yup.string().required(),
            })

            await schema.validate(data, {
              abortEarly: false,
            })

            const dt = {
              name: data.name,
              email: data.email,
              area: data.area,
              phone_number: data.phone_number,
              item_name: 'Treepycache',
              amount: total_amount,
              expiration_date: '2023-03-11T02:35:29.154Z',
            }

            await api.post('/pay-pag/order-pix', dt).then((h) => {
              const rs = h.data
              setQrCodePix(rs.qr_codes[0].links[0].href)
              setLoad(false)
            })
          } catch (error: any) {
            setLoad(false)
            console.log(error)
            addToast({
              type: 'error',
              title: 'Erro',
              description:
                'Ocorreu um erro, verifique os campos e tente novamente',
            })

            const err = getValidationErrors(error)
            forRef.current?.setErrors(err)
          }

          break
        default:
          break
      }
    },
    [addToast, amount, installments, select.type, tree],
  )

  const dataCard = {
    number: numberCard,
    name,
    month: expMonth,
    year: expYear,
    security: securityCode,
    brand,
  }

  const data = {
    locality: user?.end.bairro,
    street: user?.end.street,
    city: user?.end.city,
    region: user?.end.state,
    postal_code: user?.end.cep,
    holder: user?.name,
    number: user?.end.number_home,
    name: user?.name,
    email: user?.email,
  }

  // React.useEffect(() => {
  //   if (numberCard.length >= 6) {
  //     const appId = ''

  //     // api.post('/pay-pag/session').then((h) => {
  //     //   const parser = new DOMParser()
  //     //   const xml = parser.parseFromString(h.data, 'text/xml')
  //     //   appId = xml.lastChild?.firstChild?.textContent || ''
  //     //   api
  //     //     .post('/pay-pag/brand', {
  //     //       tk: appId,
  //     //       creditCard: numberCard,
  //     //     })
  //     //     .then((h) => {
  //     //       const rs = h.data
  //     //       console.log(rs.bin)
  //     //       setBrand(rs.bin.brand.name)
  //     //     })
  //     // })
  //   }
  // }, [numberCard])

  const parcelas = [1, 2, 3, 4]

  const closeModal = React.useCallback(async () => {
    setShowModal({ show: false, status: null })
  }, [])

  return (
    <S.Container ref={refContainer}>
      {showMoal.status === 'DECLINED' && (
        <Alert
          showModal={showMoal.show}
          type="erro"
          closed={closeModal}
          title="Não foi possível realizar a transação"
          texto="Consulte seu banco e tente novamente"
        />
      )}

      {showMoal.status === 'PAID' && (
        <Alert
          showModal={showMoal.show}
          type="sucess"
          closed={closeModal}
          title="Pagamento realizado!"
          texto="Agradecemos sua preocupação com o meio ambiente"
        />
      )}

      <h3 style={{ marginBottom: 10 }}>Como prefere pagar?</h3>
      <S.BoxSelector>
        <Selector
          selected={select.type === 'cartao'}
          title="Cartão"
          pres={() => setSelect({ type: 'cartao' })}
        />

        <Selector
          selected={select.type === 'pix'}
          title="Pix"
          pres={() => setSelect({ type: 'pix' })}
        />

        <Selector
          selected={select.type === 'boleto'}
          title="Boleto"
          pres={() => setSelect({ type: 'boleto' })}
        />
      </S.BoxSelector>
      <S.form
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

            <S.gridInpu>
              <Input
                maxLength={2}
                mask="number"
                name="area"
                label="Área"
                placeholder="(xx)"
              />

              <Input
                maxLength={9}
                label="Celular"
                mask="number"
                name="phone_number"
                placeholder="telefone"
              />
            </S.gridInpu>
          </div>

          <div className="localy">
            <h3>Endereço do titular</h3>

            <S.Box>
              <Input label="Rua" name="street" placeholder="rua" />

              <Input
                label="N°"
                mask="number"
                name="home_number"
                placeholder="Nº"
              />
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
                name="region_code"
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
            <S.grid>
              <S.BoxCard>
                <h3>Dados do cartão</h3>
                <S.ContentCard>
                  <S.Boxform>
                    <Input
                      onChange={(h) => setName(h.currentTarget.value)}
                      name="holder_name"
                      placeholder="Nome do titular"
                    />
                    <Input
                      onChange={(h) => setNumberCard(h.currentTarget.value)}
                      name="number_card"
                      mask="card"
                      placeholder="Digite o número do cartão"
                      maxLength={19}
                    />

                    <S.grid>
                      <S.gridInpu>
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
                          onChange={(h) =>
                            setSecurityCode(h.currentTarget.value)
                          }
                          name="security_code"
                          placeholder="cvv"
                          label="CVV do cartão"
                          mask="number"
                          maxLength={3}
                        />
                        <S.installments>
                          <span className="prc">Parcelas</span>
                          <S.BoxSelect
                            onChange={(h) =>
                              setInstalments(h.currentTarget.value)
                            }
                            name="installments"
                            value={installments}
                          >
                            {parcelas.map((h) => (
                              <option key={h} value={h}>
                                {h}
                              </option>
                            ))}
                          </S.BoxSelect>
                        </S.installments>
                      </S.gridInpu>
                    </S.grid>
                  </S.Boxform>
                </S.ContentCard>
              </S.BoxCard>

              <S.BoxItem>
                {/* <CardType infoCard={dataCard} /> */}
                <h3>Resumo da compra</h3>
                <span>Treepycash</span>
                <p>R$ {brlNumber(amount.toFixed(2))}</p>

                <p>arvores {tree.toFixed(0)}</p>
                <div className="item"></div>
              </S.BoxItem>
            </S.grid>
          )}

          {select.type === 'pix' && (
            <S.grid>
              <S.qrCode alt="qr_code" src={qrCodePix} />

              <S.BoxItem>
                {/* <CardType infoCard={dataCard} /> */}
                <h3>Resumo da compra</h3>
                <span>Treepycash</span>
                <p>R${brlNumber(amount.toFixed(2))}</p>

                <p>Árvores {tree.toFixed(0)}</p>
                <div className="item"></div>
              </S.BoxItem>
            </S.grid>
          )}

          {select.type === 'boleto' && (
            <S.grid>
              <S.qrCode alt="qr_code" src={qrCodePix} />

              <S.BoxItem>
                {/* <CardType infoCard={dataCard} /> */}
                <h3>Resumo da compra</h3>
                <span>Treepycash</span>
                <p>R$ {amount.toFixed(2)}</p>

                <p>arvores {tree.toFixed(2)}</p>
                <div className="item"></div>
              </S.BoxItem>
            </S.grid>
          )}
        </S.ContainerCard>

        {select.type === 'pix' && (
          <S.bt>{load ? <Loading /> : <p>Gerar QRCode</p>}</S.bt>
        )}

        {select.type === 'boleto' && (
          <S.bt>{load ? <Loading /> : <p>Gerar boleto</p>}</S.bt>
        )}

        {select.type === 'cartao' && (
          <S.bt>{load ? <Loading /> : <p>Finalizar compra</p>}</S.bt>
        )}
      </S.form>
    </S.Container>
  )
}
