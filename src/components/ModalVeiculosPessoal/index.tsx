/* eslint-disable no-unused-vars */
import * as Dialog from '@radix-ui/react-dialog'
import { Form } from '@unform/web'
import React, { useState } from 'react'
import { brlNumber, _number } from '../../utils/formatNumber'
import { veiculosP } from '../../utils/veiculosPessoal'
import { Button } from '../Button'
import { Input } from '../Input'
import {
  BoxContent,
  BoxSelect,
  ButtonAdd,
  Closed,
  Container,
  Content,
  ContentButton,
  Overlay,
  Title,
} from './styles'

export interface IVeiculoProps {
  Meio_de_transporte: string
  Combustível_Tipo: string
  Combustível: string
  Potência_do_motor?: string
  Modelo: string
  Quilometragem: number
  id: number
  co2: number
}

type Veiculo =
  | 'Carro'
  | 'Moto'
  | 'Bicicleta'
  | 'Bicicleta elétrica'
  | 'Patinete elétrico'
  | '0'

interface Props {
  setItem: (h: IVeiculoProps) => void
}

export function ModalVeiculosPessoal({ setItem }: Props) {
  const [car, setCar] = useState('0')
  const [combus, setCombus] = useState('0')
  const [combusH, setCombusH] = useState('0')
  const [km, setKm] = useState('')
  const [power, setPower] = React.useState('0')

  const [modelo, setModelo] = React.useState('0')

  const handleAddItem = React.useCallback(() => {
    let rs = {} as IVeiculoProps

    veiculosP.forEach((item) => {
      switch (car) {
        case 'Carro':
          if (
            item.Combustível_Tipo === combus &&
            item.Combustível === combusH &&
            item.Potência_do_motor === power &&
            item.Modelo === modelo
          ) {
            console.log(item.co2)
            const k = Number(_number(km)) / 100
            const co2 = (k * item.co2) / 1000
            const kmf = Number(_number(km))
            rs = {
              ...item,
              Quilometragem: kmf,
              co2,
            }
          }
          break

        case 'Moto':
          if (
            item.Combustível_Tipo === combus &&
            item.Potência_do_motor === power
          ) {
            console.log(item.co2)
            const k = Number(_number(km)) / 100
            const co2 = (k * item.co2) / 1000
            const kmf = Number(_number(km))
            rs = {
              ...item,
              Quilometragem: kmf,
              co2,
            }
          }
          break

        case 'Bicicleta':
          if (item.Meio_de_transporte === car) {
            console.log(item.co2)
            const k = Number(_number(km)) / 100
            const co2 = (k * item.co2) / 1000
            const kmf = Number(_number(km))
            rs = {
              ...item,
              Quilometragem: kmf,
              co2,
            }
          }
          break

        case 'Bicicleta elétrica':
          if (item.Meio_de_transporte === car) {
            console.log(item.co2)
            const k = Number(_number(km)) / 100
            const co2 = (k * item.co2) / 1000
            const kmf = Number(_number(km))
            rs = {
              ...item,
              Quilometragem: kmf,
              co2,
            }
          }
          break

        case 'Patinete elétrico':
          if (item.Meio_de_transporte === car) {
            console.log(item.co2)
            const k = Number(_number(km)) / 100
            const co2 = (k * item.co2) / 1000
            const kmf = Number(_number(km))
            rs = {
              ...item,
              Quilometragem: kmf,
              co2,
            }
          }
          break

        default:
          console.log(rs)

          break
      }
    })

    // veiculosP.forEach((h) => {
    //   if (h.Meio_de_transporte === car && combus === h.Combustível_Tipo) {
    //     if (h.Potência_do_motor === power) {
    //       console.log(h.Potência_do_motor, power)
    //       rs = {
    //         ...h,
    //         Quilometragem: Number(km),
    //         co2: (Number(km) * h.co2) / 1000,
    //       }
    //     }
    //   }

    //   if (h.Modelo === power) {
    //     rs = {
    //       ...h,
    //       Quilometragem: Number(km),
    //       co2: (Number(km) * h.co2) / 1000,
    //     }
    //   }

    //   if (combus === h.Combustível_Tipo && h.Combustível === combusH) {
    //     rs = {
    //       ...h,
    //       Quilometragem: Number(km),
    //       co2: (Number(km) * h.co2) / 1000,
    //     }
    //   }

    //   if (car === 'Bicicleta' && car === h.Meio_de_transporte) {
    //     rs = {
    //       ...h,
    //       Quilometragem: Number(km),
    //       co2: (Number(km) * h.co2) / 1000,
    //     }
    //   }

    //   if (car === 'Bicicleta elétrica' && car === h.Meio_de_transporte) {
    //     rs = {
    //       ...h,
    //       Quilometragem: Number(km),
    //       co2: (Number(km) * h.co2) / 1000,
    //     }
    //   }

    //   if (car === 'Patinete elétrico' && car === h.Meio_de_transporte) {
    //     rs = {
    //       ...h,
    //       Quilometragem: Number(km),
    //       co2: (Number(km) * h.co2) / 1000,
    //     }
    //   }
    // })

    setItem(rs)
    console.log(rs)

    setCar('0')
    setCombus('0')
    setCombusH('0')
    setKm('')
    setPower('0')
    setModelo('0')
  }, [car, combus, combusH, km, modelo, power, setItem])

  // Ata@1986

  return (
    <Container>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ButtonAdd>Adicionar transporte</ButtonAdd>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Overlay />

          <Content>
            <Title>Adicionar transporte</Title>

            <BoxContent>
              <div className="box">
                {car !== '0' && (
                  <div>
                    <h3>Veículo: </h3>
                    <p>{car}</p>
                  </div>
                )}

                {combus !== '0' && (
                  <div>
                    <h3>Combustível: </h3>
                    <p>{combus}</p>
                  </div>
                )}

                {combusH !== '0' && (
                  <div>
                    <h3>Combustível/hibrido: </h3>
                    <p>{combusH}</p>
                  </div>
                )}

                {power !== '0' && (
                  <div>
                    <h3>Potência do motor: </h3>
                    <p>{power}</p>
                  </div>
                )}

                {modelo !== '0' && (
                  <div>
                    <h3>Modelo: </h3>
                    <p>{modelo}</p>
                  </div>
                )}

                {/* OPTONS */}

                {car === '0' && (
                  <BoxSelect
                    onChange={(h) => setCar(h.currentTarget.value)}
                    name="car"
                    value={car}
                  >
                    <option value="0">Selecionar veículo</option>
                    <option value="Carro">Carro</option>
                    <option value="Moto">Moto</option>
                    <option value="Bicicleta">Bicicleta</option>
                    <option value="Patinete elétrico">Patinete elétrico</option>
                    <option value="Bicicleta elétrica">
                      Bicicleta elétrica
                    </option>
                  </BoxSelect>
                )}

                {combus === '0' && car === 'Carro' && (
                  <div>
                    <BoxSelect
                      onChange={(h) => setCombus(h.currentTarget.value)}
                      name="car"
                      value={combus}
                    >
                      <option value="0">Selecione o tipo de combustível</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Gasolina">Gasolina</option>
                      <option value="Elétrico">Elétrico</option>
                      <option value="Etanol">Etanol</option>
                      <option value="Híbrido">Híbrido</option>
                      <option value="GNV">GNV</option>
                    </BoxSelect>
                  </div>
                )}

                {combus === '0' && car === 'Moto' && (
                  <div>
                    <BoxSelect
                      onChange={(h) => setCombus(h.currentTarget.value)}
                      name="car"
                      value={combus}
                    >
                      <option value="0">Selecione o tipo de combustível</option>
                      <option value="Gasolina">Gasolina</option>
                      <option value="Etanol">Etanol</option>
                    </BoxSelect>
                  </div>
                )}

                {combus !== 'Elétrico' &&
                  combus !== 'Híbrido' &&
                  car !== 'Moto' &&
                  combus !== '0' &&
                  power === '0' && (
                    <BoxSelect
                      onChange={(h) => setPower(h.currentTarget.value)}
                      name="power"
                      value={power}
                    >
                      <option value="0">Selecione a potência do veículo</option>

                      <option value="1.0 à 1.5"> 1.0 à 1.5</option>
                      <option value="1.6 à 2.0">1.6 à 2.0</option>
                      <option value="Maior que 2.0">Maior que 2.0</option>
                    </BoxSelect>
                  )}

                {combus === 'Elétrico' && modelo === '0' && (
                  <BoxSelect
                    onChange={(h) => setModelo(h.currentTarget.value)}
                    name="model"
                    value={modelo}
                  >
                    <option value="0">Selecione o modelo do veículo</option>

                    <option value="Renault Zoe">Cerry Arrizo 5e</option>
                    <option value="JAC iEV40">JAC iEV40</option>
                    <option value="Nissan Leaf">Nissan Leaf</option>
                    <option value="BMW i3">BMW i3</option>
                    <option value="Chevrolet Bolt">Chevrolet Bolt</option>
                    <option value="Jaguar I-Pace">Jaguar I-Pace</option>
                    <option value="Renault Zoe">Renault Zoe</option>
                    <option value="Outro">Outro</option>
                  </BoxSelect>
                )}

                {combus === 'Híbrido' && combusH === '0' && (
                  <BoxSelect
                    onChange={(h) => setCombusH(h.currentTarget.value)}
                    name="car"
                    value={combusH}
                  >
                    <option value="0">
                      Selecione o tipo de combustível/híbrido
                    </option>
                    <option value="Diesel">Diesel</option>
                    <option value="Gasolina">Gasolina</option>
                    <option value="Etanol">Etanol</option>
                  </BoxSelect>
                )}

                {car === 'Moto' && combus !== '0' && (
                  <BoxSelect
                    onChange={(h) => setPower(h.currentTarget.value)}
                    name="power"
                    value={power}
                  >
                    <option value="0">Selecione a potência do veículo</option>

                    <option value="Até 125cc"> Até 125cc</option>
                    <option value="126cc à 250cc">126cc à 250cc</option>
                    <option value="Maior que 250cc">Maior que 250cc</option>
                  </BoxSelect>
                )}

                {combus !== '0' && car !== '0' && power !== '0' && (
                  <div className="input">
                    <h3>km</h3>
                    <Form onSubmit={() => {}}>
                      <Input
                        mask="price"
                        name="km"
                        onChange={(h) => setKm(h.currentTarget.value)}
                        placeholder="Digite o km do veículo"
                      />
                    </Form>
                  </div>
                )}

                {combus === 'Híbrido' && car !== '0' && combusH !== '0' && (
                  <div className="input">
                    <h3>km</h3>
                    <Form onSubmit={() => {}}>
                      <Input
                        mask="price"
                        name="km"
                        onChange={(h) => setKm(h.currentTarget.value)}
                        placeholder="digite o km do veículo"
                      />
                    </Form>
                  </div>
                )}

                {car === 'Bicicleta' && (
                  <div className="input">
                    <h3>km</h3>
                    <Form onSubmit={() => {}}>
                      <Input
                        mask="price"
                        name="km"
                        onChange={(h) => setKm(h.currentTarget.value)}
                        placeholder="digite o km do veículo"
                      />
                    </Form>
                  </div>
                )}

                {car === 'Bicicleta elétrica' && (
                  <div className="input">
                    <h3>km</h3>
                    <Form onSubmit={() => {}}>
                      <Input
                        mask="price"
                        name="km"
                        onChange={(h) => setKm(h.currentTarget.value)}
                        placeholder="digite o km do veículo"
                      />
                    </Form>
                  </div>
                )}

                {car === 'Patinete elétrico' && (
                  <div className="input">
                    <h3>km</h3>
                    <Form onSubmit={() => {}}>
                      <Input
                        mask="price"
                        name="km"
                        onChange={(h) => setKm(h.currentTarget.value)}
                        placeholder="digite o km do veículo"
                      />
                    </Form>
                  </div>
                )}

                {modelo !== '0' && (
                  <div className="input">
                    <h3>km</h3>
                    <Form onSubmit={() => {}}>
                      <Input
                        mask="price"
                        name="km"
                        onChange={(h) => setKm(h.currentTarget.value)}
                        placeholder="digite o km do veículo"
                      />
                    </Form>
                  </div>
                )}
              </div>

              <Closed>
                <ContentButton>
                  {km !== '' && (
                    <div className="button">
                      <Button title="Salvar" variant="A" pres={handleAddItem} />
                    </div>
                  )}
                </ContentButton>
              </Closed>
            </BoxContent>
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Container>
  )
}
