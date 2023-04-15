/* eslint-disable camelcase */
import React, { useCallback, useRef } from 'react'
import { useNavigate, useParams } from 'react-router'
import { DataPerson } from '../../../components/dataPerson'
import { Header } from '../../../components/Header'
import { HeaderC } from '../../../components/HeaderC'
import { PlanType } from '../../../components/PlanType'
import { useAuth } from '../../../context/authcontext'
import { _number, brlNumber } from '../../../utils/formatNumber'
import * as S from './styles'
import { Button } from '../../../components/Button'
import { Payment } from '../payment'
import { Form } from '@unform/web'
import { Input } from '../../../components/Input'
import { Selector } from '../../../components/selector'
import { getValidationErrors } from '../../../utils/getValidationErrors'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { api } from '../../../services/api'
import { useParc } from '../../../hooks/useParc'
import { _amount } from '../../../utils/_amount'
import { PixComp } from '../../../components/PixComp'
import { BoletoComp } from '../../../components/BoletoComp'
import { ModalComp } from '../../../components/ModalComp'
import { flexbox } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useToast } from '../../../context/ToastContext'
import { _brand } from '../../../utils/_brand'
import { number } from '../../../utils/mask'
import { IPropsParcelamento, PropsParcCard } from '../../../Dto'
import { useQuery } from 'react-query'
import { _brl } from '../../../utils/_brl'

interface SelectProps {
  type: 'cartao' | 'pix' | 'boleto'
}

interface PropsParans {
  tree: number
  brl: number
}

interface DataPropsCard {
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
  region: string
}

interface PropsSignIn {
  email: string
  password: string
}

type IBrand =
  | 'visa'
  | 'mastercard'
  | 'diners'
  | 'amex'
  | 'discover'
  | 'hipercard'
  | 'elo'
  | 'jcb'
  | 'aura'

export function Plan() {
  const ref = useRef<FormHandles>(null)

  const { userP, signInP } = useAuth()
  const { addToast } = useToast()
  const { value } = useParams()
  const { brl, tree }: PropsParans = value ? JSON.parse(value) : {}

  const [value_tree, setValue_tree] = React.useState(tree)
  const [select, setSelect] = React.useState<SelectProps>({ type: 'cartao' })
  const [step, setStep] = React.useState(1)
  const [modalSignin, setModalSignin] = React.useState(false)

  const [cardNumber, setCardNumber] = React.useState('')
  const [parcelas, setParcelas] = React.useState<PropsParcCard[]>([])

  const [installments, setInstallments] = React.useState('')

  const nav = useNavigate()

  const selectPlan = React.useCallback(() => {
    if (userP) {
      setStep(2)
    } else {
      localStorage.setItem('local', value!)
      setModalSignin(true)
    }
  }, [userP, value])

  const submit = React.useCallback(
    async (data: PropsSignIn) => {
      ref.current?.setErrors({})
      console.log(data)

      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Informe sua senha'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        await signInP({
          email: data.email,
          password: data.password,
        }).then((h) => {
          setModalSignin(false)
        })
      } catch (err: any) {
        const message = err.response?.data.message

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: message,
        })

        const errors = getValidationErrors(err)
        ref.current?.setErrors(errors)
      }
    },
    [addToast, signInP],
  )

  // const handleSubmit = useCallback(
  //   async (data: DataProps) => {
  //     forRef.current?.setErrors({})

  //     const vl = _number(amount.toFixed(2))
  //     const total_amount = Number(vl)
  //     const postal_code = Number(_number(data.postal_code))
  //     const region_code = data.region_code.toUpperCase()
  //     const number_card = Number(_number(data.number_card))

  //     switch (select.type) {
  //       case 'cartao':
  //         try {
  //           setLoad(true)

  //           const schema = Yup.object().shape({
  //             name: Yup.string().required('nome obrigatório'),
  //             email: Yup.string()
  //               .required('email obrigatório')
  //               .email('digite um email válido'),
  //             locality: Yup.string().required('bairro obrigatório'),
  //             street: Yup.string().required('rua obrigatório'),
  //             phone_number: Yup.string().required('número obrigatório'),
  //             complement: Yup.string().required(),
  //             city: Yup.string().required('cidade obrigatório'),
  //             region_code: Yup.string().required('estado obrigatório'),
  //             postal_code: Yup.string().required(),

  //             holder_name: Yup.string().required(),
  //             expire: Yup.string().required(),
  //             security_code: Yup.string().required(),
  //             area: Yup.string().required('dd obrigatório'),
  //           })

  //           await schema.validate(data, {
  //             abortEarly: false,
  //           })

  //           const [month, year] = data.expire.split('/').map(String)

  //           const pag = {
  //             name: data.name,
  //             email: data.email,
  //             area: data.area,
  //             phone_number: data.phone_number,
  //             name_item: 'Treepycach',
  //             reference_item_id: new Date().getTime(),
  //             amount: total_amount,
  //             street: data.street,
  //             home_number: data.home_number,
  //             complement: data.complement,
  //             locality: data.locality,
  //             city: data.city,
  //             region_code,
  //             postal_code,
  //             description: `Produto adiquirido: ${tree}, no valor total de R$ ${total_amount}`,

  //             installments: Number(installments),
  //             number_card,
  //             exp_month: month,
  //             exp_year: `20${year}`,
  //             security_code: data.security_code,
  //             holder_name: data.holder_name,
  //           }

  //           await api.post('/pay-pag/card', pag).then((h) => {
  //             setLoad(false)
  //             const rs = h.data

  //             const status = rs.charges[0]?.status
  //             console.log(status)
  //             if (status === 'DECLINED') {
  //               setShowModal({ show: true, status: 'DECLINED' })
  //             }

  //             if (status === 'PAID') {
  //               setShowModal({ show: true, status: 'PAID' })
  //             }
  //           })
  //         } catch (error: any) {
  //           setLoad(false)
  //           console.log(error)
  //           addToast({
  //             type: 'error',
  //             title: 'Erro',
  //             description:
  //               'Ocorreu um erro, verifique os campos e tente novamente',
  //           })

  //           const err = getValidationErrors(error)
  //           forRef.current?.setErrors(err)
  //         }

  //         break

  //       case 'pix':
  //         try {
  //           setLoad(true)

  //           const schema = Yup.object().shape({
  //             name: Yup.string().required('nome obrigatório'),
  //             email: Yup.string()
  //               .required('email obrigatório')
  //               .email('digite um email válido'),
  //             locality: Yup.string().required('bairro obrigatório'),
  //             street: Yup.string().required('rua obrigatório'),
  //             phone_number: Yup.string().required('número obrigatório'),
  //             complement: Yup.string().required(),
  //             city: Yup.string().required('cidade obrigatório'),
  //             region_code: Yup.string().required('estado obrigatório'),
  //             postal_code: Yup.string().required(),
  //             area: Yup.string().required(),
  //           })

  //           await schema.validate(data, {
  //             abortEarly: false,
  //           })

  //           const expiration_date = addHours(new Date(), 1)

  //           const dt = {
  //             name: data.name,
  //             email: data.email,
  //             area: data.area,
  //             phone_number: data.phone_number,
  //             item_name: 'Treepycache',
  //             amount: total_amount,
  //             expiration_date,

  //             street: data.street,
  //             home_number: data.home_number,
  //             complement: data.complement,
  //             locality: data.locality,
  //             city: data.city,
  //             region_code,
  //             postal_code,
  //             holder_name: data.name,
  //           }

  //           await api.post('/pay-pag/pix', dt).then((h) => {
  //             const rs = h.data
  //             setQrCodePix(rs.qr_codes[0].links[0].href)
  //             setLoad(false)
  //           })
  //         } catch (error: any) {
  //           setLoad(false)
  //           console.log(error)
  //           addToast({
  //             type: 'error',
  //             title: 'Erro',
  //             description:
  //               'Ocorreu um erro, verifique os campos e tente novamente',
  //           })

  //           const err = getValidationErrors(error)
  //           console.log(err)
  //           forRef.current?.setErrors(err)
  //         }

  //         break

  //       case 'boleto':
  //         try {
  //           setLoad(true)

  //           const schema = Yup.object().shape({
  //             name: Yup.string().required('nome obrigatório'),
  //             email: Yup.string()
  //               .required('email obrigatório')
  //               .email('digite um email válido'),
  //             area: Yup.string().required(),
  //             phone_number: Yup.string().required('número obrigatório'),
  //             locality: Yup.string().required('bairro obrigatório'),
  //             street: Yup.string().required('rua obrigatório'),
  //             complement: Yup.string().required(),
  //             city: Yup.string().required('cidade obrigatório'),
  //             region_code: Yup.string().required('estado obrigatório'),
  //             postal_code: Yup.string().required(),
  //           })

  //           await schema.validate(data, {
  //             abortEarly: false,
  //           })

  //           const today = new Date()
  //           const currency_day = format(addDays(today, 30), 'yyyy-MM-dd')

  //           const dt = {
  //             name: data.name,
  //             email: data.email,
  //             area: data.area,
  //             phone_number: data.phone_number,
  //             item_name: 'Treepycache',
  //             amount: total_amount,

  //             street: data.street,
  //             home_number: data.home_number,
  //             complement: data.complement,
  //             locality: data.locality,
  //             city: data.city,
  //             region_code,
  //             postal_code,
  //             holder_name: data.name,
  //             due_date: currency_day,
  //             region: data.region,
  //           }

  //           await api.post('/pay-pag/boleto', dt).then((h) => {
  //             const rs = h.data
  //             console.log(rs)
  //             setBoletoImage(rs.charges[0].links[1].href)
  //             setLoad(false)
  //           })
  //         } catch (error: any) {
  //           setLoad(false)
  //           console.log(error)
  //           addToast({
  //             type: 'error',
  //             title: 'Erro',
  //             description:
  //               'Ocorreu um erro, verifique os campos e tente novamente',
  //           })

  //           const err = getValidationErrors(error)
  //           forRef.current?.setErrors(err)
  //         }

  //         break
  //       default:
  //         break
  //     }
  //   },
  //   [addToast, amount, installments, select.type, tree],
  // )

  const amount = _amount(value_tree === 0 ? tree : value_tree).toFixed(2)
  const currency = Number(_number(amount))

  React.useEffect(() => {
    if (cardNumber.length > 18 && currency > 0) {
      try {
        api.get(`/pay-pag/parc/${currency}`).then((response) => {
          const card = _number(cardNumber)
          const brnd = _brand.getCardFlag(card) as IBrand

          const rs = response.data as IPropsParcelamento

          const parc = rs?.payment_methods.credit_card[brnd]
            .installment_plans as PropsParcCard[]
          const pr = parc.map((h, i) => {
            const value = brlNumber(h.amount.value)
            const total = brlNumber(h.installment_value)
            // console.log(_brl(h.installment_value), h.installment_value, 't')
            return {
              ...h,
              amount: {
                ...h.amount,
                value,
                fees: {
                  buyer: {
                    interest: {
                      total,
                      installments:
                        h.amount?.fees?.buyer?.interest?.installments,
                    },
                  },
                },
              },
            }
          })
          setParcelas(pr)
        })
      } catch (err) {}
    }
  }, [cardNumber, currency])

  return (
    <S.Container>
      <HeaderC type="2" />

      {step === 1 && (
        <S.content>
          <ModalComp
            modal={(h) => setModalSignin(h)}
            show={modalSignin}
            component={
              <Form
                onSubmit={submit}
                ref={ref}
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <S.boxSignIn>
                  <S.titleSignIn>
                    Entre com sua conta para continuar
                  </S.titleSignIn>
                  <Input
                    label="E-mail"
                    placeholder="Digite seu email"
                    name="email"
                  />
                  <Input
                    label="Senha"
                    placeholder="Digite sua senha"
                    name="password"
                  />

                  <S.gridInput style={{ justifyContent: 'space-between' }}>
                    <S.link to="">Esqueci minha senha</S.link>
                    <S.link to="/signUp/1">Não tenho conta</S.link>
                  </S.gridInput>

                  <Button variant="AB" title="ENTRAR" />
                </S.boxSignIn>
              </Form>
            }
          />

          <S.title>Conheça nossos planos</S.title>

          <S.BoxSelect>
            <PlanType
              text="Zere suas emissões de carbono, onde o total de TreepyCash comprado nesse plano será suficiente para capturar CO2, além de proteger a biodiversidade e garantir a redução das mudanças climáticas e proteção do planeta, além de se destacar por sua postura sustentável e responsável. Parabéns por zerar suas emissões!"
              amount={`${brlNumber(brl.toFixed(2))}`}
              title="Pagamento total "
            />
            <PlanType
              text="O plano de compensação parcial permite que você compense apenas parte de suas emissões de carbono, de acordo com a quantidade de TreepyCash definida no processo de pagamento. Mesmo assim, essa opção é muito importante, pois permite que você contribua para a redução das mudanças climáticas, mesmo que em menor escala, além de mostrar compromisso com a sustentabilidade. Continue reflorestando!"
              amount={`${brlNumber(brl.toFixed(2))}`}
              title="Pagamento parcial"
            />
            <PlanType
              text="O plano parcelado permite você comprar mensalmente seus TreepyCash permitindo manter compensar suas emissões de carbono em parcelas, de acordo com a sua evolução. Isso permite uma maior flexibilidade financeira, ao mesmo tempo em que sua você contribui ativamente(1) para a redução das mudanças climáticas e demonstra seu compromisso com a sustentabilidade. Está no caminho certo! 
              (1) A qualquer momento você poderá cancelar o pagamento mensal."
              amount={`${brlNumber(brl.toFixed(2))}`}
              title="Pagamento recorrente"
            />
          </S.BoxSelect>

          <Button title="CONTINUAR" pres={selectPlan} variant="AB" />
        </S.content>
      )}

      {step === 2 && (
        <S.box>
          <Form onSubmit={() => {}} style={{ width: '100%' }}>
            <S.grid>
              <S.preview>
                <Selector selected title="Usar os dados da conta" />

                <Input placeholder="Nome" label="Nome" name="nome" />

                <S.gridInput>
                  <S.BoxInput style={{ width: 65 }}>
                    <Input label="Área" placeholder="(99)" name="phone_area" />
                  </S.BoxInput>

                  <S.BoxInput style={{ width: '40%', marginLeft: 10 }}>
                    <Input
                      label="99999 9999"
                      placeholder="Informe seu celular"
                      name="phone_number"
                    />
                  </S.BoxInput>
                </S.gridInput>

                <Input placeholder="E-mail" label="E-mail" name="nome" />

                <S.gridInput>
                  <S.BoxInput style={{ width: '70%' }}>
                    <Input label="Rua" placeholder="Rua" name="street" />
                  </S.BoxInput>

                  <S.BoxInput style={{ width: 100, marginLeft: 10 }}>
                    <Input label="Nº" placeholder="Número" name="home_number" />
                  </S.BoxInput>
                </S.gridInput>

                <S.gridInput>
                  <S.BoxInput style={{ width: '60%' }}>
                    <Input
                      name="locality"
                      placeholder="Bairro"
                      label="Bairro"
                    />
                  </S.BoxInput>

                  <S.BoxInput style={{ marginLeft: 10 }}>
                    <Input
                      name="complemento"
                      placeholder="Complemento"
                      label="Complemento"
                    />
                  </S.BoxInput>
                </S.gridInput>
                <S.gridInput>
                  <S.BoxInput style={{ width: '50%' }}>
                    <Input label="Cidade" placeholder="Cidade" name="city" />
                  </S.BoxInput>

                  <S.BoxInput style={{ marginLeft: 10 }}>
                    <Input label="Estado" placeholder="Estado" name="state" />
                  </S.BoxInput>

                  <S.BoxInput style={{ width: '20%', marginLeft: 10 }}>
                    <Input label="UF" placeholder="UF" name="region_code" />
                  </S.BoxInput>
                </S.gridInput>

                <Input name="postal_code" placeholder="CEP" label="CEP" />
              </S.preview>

              <S.metodo>
                <S.typePay>
                  <h4>Parte do valor</h4>

                  <S.gridInput>
                    <p>
                      Total de árvores: {value_tree === 0 ? tree : value_tree}
                    </p>
                    <p style={{ marginLeft: 10 }}>R${amount}</p>
                  </S.gridInput>
                  <S.BoxInput style={{ width: 100 }}>
                    <Input
                      onChange={(h) =>
                        setValue_tree(Number(h.currentTarget.value))
                      }
                      name="partial"
                    />
                  </S.BoxInput>
                </S.typePay>

                <h3 style={{ alignSelf: 'center', marginBottom: 10 }}>
                  Como prefere pagar?
                </h3>
                <S.boxSelect>
                  <Selector
                    pres={() => setSelect({ type: 'cartao' })}
                    selected={select.type === 'cartao'}
                    title="Cartão"
                  />
                  <Selector
                    pres={() => setSelect({ type: 'pix' })}
                    selected={select.type === 'pix'}
                    title="Pix"
                  />
                  <Selector
                    pres={() => setSelect({ type: 'boleto' })}
                    selected={select.type === 'boleto'}
                    title="Boleto"
                  />
                </S.boxSelect>

                {select.type === 'cartao' && (
                  <S.BoxCard>
                    <Input
                      name="holder_name"
                      placeholder="Nome do titular"
                      label="Nome do titular"
                    />
                    <Input
                      maxLength={19}
                      mask="card"
                      name="card_number"
                      placeholder="Número do cartão"
                      label="Número do cartão"
                      onChange={(h) => setCardNumber(h.currentTarget.value)}
                    />

                    <S.gridInput>
                      <S.BoxInput>
                        <Input
                          maxLength={7}
                          mask="expire"
                          name="expire"
                          label="Validade"
                          placeholder="Validade Mês/ano"
                        />
                      </S.BoxInput>

                      <S.BoxInput style={{ marginLeft: 10, width: 75 }}>
                        <Input name="cvv" label="CVV" placeholder="CVV" />
                      </S.BoxInput>
                    </S.gridInput>

                    <S.installments>
                      <span className="prc">Parcelas</span>
                      <S.boxSelection
                        onChange={(h) => setInstallments(h.currentTarget.value)}
                        name="installments"
                        value={installments}
                      >
                        {parcelas.map((h, i) => (
                          <option
                            key={i}
                            value={
                              i === 0
                                ? h.amount.value
                                : h.amount.fees?.buyer?.interest?.total
                            }
                          >
                            {i + 1} x R$
                            {i === 0
                              ? h.amount.value
                              : h.amount.fees?.buyer?.interest?.total}
                          </option>
                        ))}
                      </S.boxSelection>
                    </S.installments>
                  </S.BoxCard>
                )}

                {select.type === 'pix' && (
                  <S.BoxCard>
                    <PixComp />
                  </S.BoxCard>
                )}

                {select.type === 'boleto' && (
                  <S.BoxCard>
                    <BoletoComp />
                  </S.BoxCard>
                )}
              </S.metodo>
            </S.grid>
            <Button />
          </Form>
        </S.box>
      )}
    </S.Container>
  )
}
