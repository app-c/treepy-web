/* eslint-disable camelcase */
import React, { useCallback, useRef } from 'react'
import { useNavigate, useParams } from 'react-router'
import { HeaderC } from '../../../components/HeaderC'
import { PlanType } from '../../../components/PlanType'
import { useAuth } from '../../../context/authcontext'
import { _number, brlNumber } from '../../../utils/formatNumber'
import * as S from './styles'
import { Button } from '../../../components/Button'
import { Form } from '@unform/web'
import { Input } from '../../../components/Input'
import { Selector } from '../../../components/selector'
import { getValidationErrors } from '../../../utils/getValidationErrors'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { api } from '../../../services/api'
import { _amount } from '../../../utils/_amount'
import { PixComp } from '../../../components/PixComp'
import { BoletoComp } from '../../../components/BoletoComp'
import { ModalComp } from '../../../components/ModalComp'
import { useToast } from '../../../context/ToastContext'
import { IResponseBoleto, IResponsePix, PropsUser } from '../../../Dto'
import { useQuery } from 'react-query'
import { _brl } from '../../../utils/_brl'
import { Alert } from '../../../components/Alert'
import { addDays, format } from 'date-fns'
import { DataPayment } from '../../../components/DataPayment'
import { DataCardPayment } from '../../../components/DataCardPayment'
import { EncriptCard, IEncrypt, useEncrypt } from '../../../hooks/encriptyCard'

interface SelectProps {
  type: 'cartao' | 'pix' | 'boleto'
}

type TPlanSelect = 'total' | 'partial' | 'parcelado'

interface PropsParans {
  tree: number
  brl: number
}

interface DataPropsCard {
  full_name: string
  email: string
  area: string
  phone_number: string
  phone_area: string
  cpf: string
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
  state: string
}

interface PropsSignIn {
  email: string
  password: string
}

interface IBoleto {
  png: string
  pdf: string
}

interface PropsMosal {
  show: boolean
  status: 'DECLINED' | 'PAID' | null
}

export function Plan() {
  const ref = useRef<FormHandles>(null)
  const nav = useNavigate()
  const { userP, signInP, logOut, encryted, colectData } = useAuth()

  const [load, setLoad] = React.useState(false)

  const { addToast } = useToast()
  const { value } = useParams()
  const { brl, tree }: PropsParans = value ? JSON.parse(value) : {}

  const [value_tree, setValue_tree] = React.useState(tree)
  const [select, setSelect] = React.useState<SelectProps>({ type: 'cartao' })
  const [selectPlan, setSelectPlan] = React.useState<TPlanSelect>('total')
  const [step, setStep] = React.useState(1)
  const [modalSignin, setModalSignin] = React.useState(false)

  const [qrcodeImg, setQrcodeImg] = React.useState('')
  const [boletoImg, setBoletoImg] = React.useState<IBoleto>({
    png: '',
    pdf: '',
  })

  const [installments, setInstallments] = React.useState('1')
  const [selectInicialData, setSelectInicialData] = React.useState(false)
  const [userData, setUserData] = React.useState<PropsUser>({} as PropsUser)
  const [modal, setModal] = React.useState<PropsMosal>({
    show: false,
    status: null,
  })

  const dataUser = useQuery('user', async () => {
    const user = await api.get('/user/find-user')

    return user.data as PropsUser
  })

  const initialUser = selectInicialData ? dataUser.data : userData

  // React.useEffect(() => {
  //   const error = dataUser.error as any
  //   if (error.response.data.message === 'falta o token') {
  //     logOut()
  //   }
  // }, [])

  const handleNext = React.useCallback(() => {
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
          dataUser.refetch()
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

  const amount = _amount(value_tree === 0 ? tree : value_tree).toFixed(2)
  const currency = Number(_number(amount))

  const handleSubmit = useCallback(
    async (data: DataPropsCard) => {
      ref.current?.setErrors({})

      const postal_code = Number(_number(data.postal_code))
      const tax_id = Number(_number(data.cpf))
      const region_code = data.region_code.toUpperCase()

      switch (select.type) {
        case 'cartao':
          try {
            setLoad(true)

            const schema = Yup.object().shape({
              full_name: Yup.string().required('*'),
              email: Yup.string().required('*').email('digite um email válido'),
              locality: Yup.string().required('*'),
              street: Yup.string().required('*'),
              phone_number: Yup.string().required('*'),
              complement: Yup.string().required('*'),
              city: Yup.string().required('*'),
              state: Yup.string().required('*'),
              region_code: Yup.string().required('*'),
              postal_code: Yup.string().required('*'),

              holder_name: Yup.string().required('*'),
              expire: Yup.string().required('*'),
              number_card: Yup.string().required('*'),
              security_code: Yup.string().required('*'),
              phone_area: Yup.string().required('*'),
            })

            await schema.validate(data, {
              abortEarly: false,
            })

            console.log(encryted, 'foi')

            const pag = {
              description: `Produto adiquirido: ${tree} árvores, no valor total de R$ ${_brl(
                currency,
              )}`,
              name: data.full_name,
              email: data.email,
              area: data.phone_area,
              phone_number: data.phone_number,
              tax_id,
              amount: currency,
              street: data.street,
              home_number: data.home_number,
              complement: data.complement,
              locality: data.locality,
              city: data.city,

              region_code,
              postal_code,
              region: data.state,

              installments: Number(installments),

              encrypted: encryted?.encryptedCard,
              security_code: data.security_code,
            }

            await api.post('/charges/card', pag).then((h) => {
              setLoad(false)
              const rs = h.data

              console.log(rs)

              const status = rs.status

              if (status === 'PAID') {
                setModal({ show: true, status: 'PAID' })
              }
            })
          } catch (error: any) {
            setLoad(false)
            console.log(error)

            if (error.response?.data?.message === 'Pagamento recusado') {
              setModal({ show: true, status: 'DECLINED' })
            }

            addToast({
              type: 'error',
              title: 'Erro',
              description:
                'Ocorreu um erro, verifique os campos e tente novamente',
            })

            const err = getValidationErrors(error)
            ref.current?.setErrors(err)
          }

          break

        case 'pix':
          try {
            setLoad(true)

            const schema = Yup.object().shape({
              full_name: Yup.string().required('nome obrigatório'),
              email: Yup.string()
                .required('email obrigatório')
                .email('digite um email válido'),
              locality: Yup.string().required('bairro obrigatório'),
              street: Yup.string().required('rua obrigatório'),
              phone_number: Yup.string().required('número obrigatório'),
              complement: Yup.string().required(),
              city: Yup.string().required('cidade obrigatório'),
              state: Yup.string().required('cidade obrigatório'),
              region_code: Yup.string().required('estado obrigatório'),
              postal_code: Yup.string().required(),
            })

            await schema.validate(data, {
              abortEarly: false,
            })

            const dt = {
              name: data.full_name,
              email: data.email,
              area: data.phone_area,
              phone_number: data.phone_number,
              item_name: 'Treepycache',
              amount: currency,
              street: data.street,
              home_number: data.home_number,
              complement: data.complement,
              locality: data.locality,
              city: data.city,
              region_code,
              postal_code,
              holder_name: data.full_name,

              tax_id,
            }

            await api.post('/charges/pix', dt).then((h) => {
              const rs = h.data as IResponsePix

              setQrcodeImg(rs.qrcode_image)
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
            console.log(err)
            ref.current?.setErrors(err)
          }

          break

        case 'boleto':
          try {
            setLoad(true)

            const schema = Yup.object().shape({
              full_name: Yup.string().required('nome obrigatório'),
              email: Yup.string()
                .required('email obrigatório')
                .email('digite um email válido'),
              phone_area: Yup.string().required(),
              phone_number: Yup.string().required('número obrigatório'),
              locality: Yup.string().required('bairro obrigatório'),
              street: Yup.string().required('rua obrigatório'),
              complement: Yup.string().required(),
              city: Yup.string().required('cidade obrigatório'),
              region_code: Yup.string().required('estado obrigatório'),
              postal_code: Yup.string().required(),
            })

            await schema.validate(data, {
              abortEarly: false,
            })

            const today = new Date()
            const currency_day = format(addDays(today, 5), 'yyyy-MM-dd')

            const dt = {
              name: data.full_name,
              email: data.email,
              area: data.phone_area,
              phone_number: data.phone_number,
              item_name: 'Treepycache',
              amount: currency,

              street: data.street,
              home_number: data.home_number,
              complement: data.complement,
              locality: data.locality,
              city: data.city,
              region_code,
              postal_code,
              holder_name: data.full_name,
              due_date: currency_day,
              region: data.state,

              tax_id,
            }

            await api.post('/charges/boleto', dt).then((h) => {
              const rs = h.data as IResponseBoleto
              console.log(rs)
              setBoletoImg({
                png: rs.links[1].href,
                pdf: rs.links[0].href,
              })
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
            ref.current?.setErrors(err)
          }

          break
        default:
          break
      }
    },
    [addToast, currency, encryted, installments, select, tree],
  )

  const closeModal = React.useCallback(async () => {
    setModal({
      show: false,
      status: null,
    })
    nav('/calc')
  }, [nav])

  return (
    <S.Container>
      <HeaderC type="2" />

      {modal.status === 'DECLINED' && (
        <Alert
          showModal={modal.show}
          type="erro"
          closed={closeModal}
          title="Não foi possível realizar a transação"
          texto="Consulte seu banco e tente novamente"
        />
      )}

      {modal.status === 'PAID' && (
        <Alert
          showModal={modal.show}
          type="sucess"
          closed={closeModal}
          title="Pagamento realizado!"
          texto="Agradecemos sua preocupação com o meio ambiente"
        />
      )}

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
                    type="password"
                  />

                  <S.bxForgot style={{ justifyContent: 'space-between' }}>
                    <S.link to="">Esqueci minha senha</S.link>
                    <S.link to="/signUp/1">Não tenho conta</S.link>
                  </S.bxForgot>

                  <Button variant="AB" title="ENTRAR" />
                </S.boxSignIn>
              </Form>
            }
          />

          <S.title>Conheça nossos planos</S.title>

          <S.BoxSelect>
            <PlanType amount={`${brlNumber(brl.toFixed(2))}`} />
          </S.BoxSelect>

          <Button title="CONTINUAR" pres={handleNext} variant="AB" />
        </S.content>
      )}

      {step === 2 && (
        <S.box>
          <Form
            initialData={{
              full_name: initialUser?.full_name,
              email: initialUser?.email,
              phone_area: initialUser?.phone_area,
              phone_number: initialUser?.phone_number,
              cpf: initialUser?.cpf,
              street: initialUser?.end?.street,
              home_number: initialUser?.end?.number_home,
              locality: initialUser?.end?.locality,
              city: initialUser?.end?.city,
              state: initialUser?.end?.state,
              region_code: initialUser?.end?.region_code.toUpperCase(),
              postal_code: initialUser?.end?.postal_code,
            }}
            onSubmit={handleSubmit}
            style={{ width: '100%' }}
            ref={ref}
          >
            <S.grid>
              <S.boxData>
                <h2 style={{ alignSelf: 'center' }}>Dados para pagamento</h2>
                <Selector
                  colorText="dark"
                  selected={selectInicialData}
                  pres={() => setSelectInicialData(!selectInicialData)}
                  title="Usar dados da conta"
                />

                <DataPayment />
              </S.boxData>

              <S.boxData>
                <h2 style={{ alignSelf: 'center' }}>
                  Escolha o plano e forma de pagamento
                </h2>

                <S.gridMethod>
                  <S.boxMethod>
                    <S.boxSelect>
                      <Selector
                        colorText="dark"
                        pres={() => setSelectPlan('total')}
                        selected={selectPlan === 'total'}
                        title="Total"
                      />
                      <Selector
                        colorText="dark"
                        pres={() => setSelectPlan('partial')}
                        selected={selectPlan === 'partial'}
                        title="Parcial"
                      />
                      <Selector
                        colorText="dark"
                        pres={() => setSelectPlan('parcelado')}
                        selected={selectPlan === 'parcelado'}
                        title="Parcelado"
                      />
                    </S.boxSelect>

                    <S.typePay>
                      {selectPlan !== 'total' && (
                        <S.gridInput>
                          <S.BoxInput style={{ width: 100 }}>
                            <Input
                              onChange={(h) =>
                                setValue_tree(Number(h.currentTarget.value))
                              }
                              name="partial"
                            />
                          </S.BoxInput>

                          <h4 style={{ marginLeft: 20 }}>TreepyCach</h4>
                        </S.gridInput>
                      )}
                    </S.typePay>
                  </S.boxMethod>

                  <S.boxMethod>
                    <h2>
                      Total: R$
                      {brlNumber(currency) === '0'
                        ? '0,00'
                        : brlNumber(currency)}
                    </h2>
                  </S.boxMethod>
                </S.gridMethod>

                <S.subtitle style={{ marginBottom: 10 }}>
                  Como prefere pagar?
                </S.subtitle>

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
                  <DataCardPayment
                    type={selectPlan}
                    setInstallments={(h) => setInstallments(h)}
                    currency={currency}
                  />
                )}

                {select.type === 'pix' && (
                  <S.BoxPix>
                    <PixComp image={qrcodeImg} />
                  </S.BoxPix>
                )}

                {select.type === 'boleto' && (
                  <S.BoxBoleto>
                    <BoletoComp image={boletoImg.png} />
                  </S.BoxBoleto>
                )}
                <S.boxBottom>
                  {select.type === 'cartao' && (
                    <Button load={load} title="FINALIZA COMPRA" variant="B" />
                  )}
                  {select.type === 'pix' && (
                    <Button load={load} title="GERAR QRCODE" variant="AB" />
                  )}
                  {select.type === 'boleto' && (
                    <>
                      {boletoImg.png === '' ? (
                        <Button load={load} title="GERAR BOLETO" variant="AB" />
                      ) : (
                        <a
                          target="_blank"
                          href={boletoImg.pdf}
                          rel="noreferrer"
                        >
                          {' '}
                          BAIXAR BOLETO
                        </a>
                      )}
                    </>
                  )}
                </S.boxBottom>
              </S.boxData>
            </S.grid>
          </Form>
        </S.box>
      )}
    </S.Container>
  )
}
