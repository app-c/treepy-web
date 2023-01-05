import * as Dialog from '@radix-ui/react-dialog'
import React, { useState } from 'react'
import { veiculosP } from '../../utils/veiculosPessoal'
import { Button } from '../Button'
import {
  BoxContent,
  ButtonAdd,
  Closed,
  Container,
  Content,
  ContentButton,
  Input,
  Overlay
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

interface Props {
  setItem: (h: IVeiculoProps) => void
}

export function ModalVeiculosPessoal({ setItem }: Props) {
  const [car, setCar] = useState('0')
  const [combus, setCombus] = useState('0')
  const [combusH, setCombusH] = useState('0')
  const [km, setKm] = useState('')
  const [power, setPower] = React.useState('0')

  const [vei, setVei] = React.useState<IVeiculoProps>()

  const handleAddItem = React.useCallback(() => {
    let rs = {} as IVeiculoProps

    veiculosP.forEach((h) => {
      if (h.Meio_de_transporte === car && combus === h.Combustível_Tipo) {
        if (h.Potência_do_motor === power) {
          rs = {
            ...h,
            Quilometragem: Number(km),
            co2: (Number(km) * h.co2) / 1000,
          }
        }
      }
      if (h.Modelo === power) {
        rs = {
          ...h,
          Quilometragem: Number(km),
          co2: (Number(km) * h.co2) / 1000,
        }
      }

      if (combus === h.Combustível_Tipo && h.Combustível === combusH) {
        rs = {
          ...h,
          Quilometragem: Number(km),
          co2: (Number(km) * h.co2) / 1000,
        }
      }

      if (car === 'Bicicleta' && car === h.Meio_de_transporte) {
        rs = {
          ...h,
          Quilometragem: Number(km),
          co2: (Number(km) * h.co2) / 1000,
        }
      }

      if (car === 'Bicicleta elétrica' && car === h.Meio_de_transporte) {
        rs = {
          ...h,
          Quilometragem: Number(km),
          co2: (Number(km) * h.co2) / 1000,
        }
      }

      if (car === 'Patinete elétrico' && car === h.Meio_de_transporte) {
        rs = {
          ...h,
          Quilometragem: Number(km),
          co2: (Number(km) * h.co2) / 1000,
        }
      }
    })

    console.log(rs)
    setItem(rs)

    setCar('0')
    setCombus('0')
    setCombusH('0')
    setKm('')
    setPower('0')
  }, [car, combus, combusH, km, power, setItem])

  // Ata@1986

  return (
    <Container>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ButtonAdd>adicionar transporte</ButtonAdd>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Overlay />

          <Content>
            <Dialog.Title>adicionar transporte</Dialog.Title>

            <BoxContent>
              <div className="box">
                {car !== '0' && (
                  <div>
                    <h3>veículo: </h3>
                    <p>{car}</p>
                  </div>
                )}

                {combus !== '0' && (
                  <div>
                    <h3>combustível: </h3>
                    <p>{combus}</p>
                  </div>
                )}

                {combusH !== '0' && (
                  <div>
                    <h3>combustível/hibrido: </h3>
                    <p>{combusH}</p>
                  </div>
                )}

                {power !== '0' && (
                  <div>
                    <h3>potência do motor: </h3>
                    <p>{power}</p>
                  </div>
                )}

                {/* OPTONS */}

                {car === '0' && (
                  <select
                    onChange={(h) => setCar(h.currentTarget.value)}
                    name="car"
                    value={car}
                  >
                    <option value="0">selecionar veículo</option>
                    <option value="Carro">carro</option>
                    <option value="Moto">moto</option>
                    <option value="Bicicleta">bicicleta</option>
                    <option value="Patinete elétrico">Patinete elétrico</option>
                    <option value="Bicicleta elétrica">
                      bicicleta elétrica
                    </option>
                  </select>
                )}

                {combus === '0' &&
                  car !== '0' &&
                  car !== 'Bicicleta' &&
                  car !== 'Bicicleta elétrica' &&
                  car !== 'Patinete elétrico' && (
                    <select
                      onChange={(h) => setCombus(h.currentTarget.value)}
                      name="car"
                      value={combus}
                    >
                      <option value="0">selecione o tipo de combustível</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Gasolina">Gasolina</option>
                      <option value="Elétrico">Elétrico</option>
                      <option value="Etanol">Etanol</option>
                      <option value="Híbrido">Híbrido</option>
                      <option value="GNV">GNV</option>
                    </select>
                  )}

                {combus !== 'Elétrico' &&
                  combus !== 'Híbrido' &&
                  combus !== '0' &&
                  power === '0' && (
                    <select
                      onChange={(h) => setPower(h.currentTarget.value)}
                      name="power"
                      value={power}
                    >
                      <option value="0">selecione a potência do veículo</option>

                      <option value="1.0 à 1.5"> 1.0 à 1.5</option>
                      <option value="1.6 à 2.0">1.6 à 2.0</option>
                      <option value="Maior que 2.0">Maior que 2.0</option>
                    </select>
                  )}

                {combus === 'Elétrico' && power === '0' && (
                  <select
                    onChange={(h) => setPower(h.currentTarget.value)}
                    name="power"
                    value={power}
                  >
                    <option value="0">selecione o modelo do veículo</option>

                    <option value="Renault Zoe">Cerry Arrizo 5e</option>
                    <option value="JAC iEV40">JAC iEV40</option>
                    <option value="Nissan Leaf">Nissan Leaf</option>
                    <option value="BMW i3">BMW i3</option>
                    <option value="Chevrolet Bolt">Chevrolet Bolt</option>
                    <option value="Jaguar I-Pace">Jaguar I-Pace</option>
                    <option value="Outro">Outro</option>
                  </select>
                )}

                {combus === 'Híbrido' && combusH === '0' && (
                  <select
                    onChange={(h) => setCombusH(h.currentTarget.value)}
                    name="car"
                    value={combusH}
                  >
                    <option value="0">
                      selecione o tipo de combustível/híbrido
                    </option>
                    <option value="Diesel">Diesel</option>
                    <option value="Gasolina">Gasolina</option>
                    <option value="Etanol">Etanol</option>
                  </select>
                )}

                {car === 'Moto' && (
                  <select
                    onChange={(h) => setPower(h.currentTarget.value)}
                    name="power"
                    value={power}
                  >
                    <option value="0">selecione a potência do veículo</option>

                    <option value="Até 125cc"> Até 125cc</option>
                    <option value="126cc à 250cc">126cc à 250cc</option>
                    <option value="Maior que 250cc">Maior que 250cc</option>
                  </select>
                )}

                {combus !== '0' && car !== '0' && power !== '0' && (
                  <div className="input">
                    <h3>km</h3>
                    <Input
                      onChange={(h) => setKm(h.currentTarget.value)}
                      placeholder="digite o km do veículo"
                    />
                  </div>
                )}

                {combus === 'Híbrido' && car !== '0' && combusH !== '0' && (
                  <div className="input">
                    <h3>km</h3>
                    <Input
                      onChange={(h) => setKm(h.currentTarget.value)}
                      placeholder="digite o km do veículo"
                    />
                  </div>
                )}

                {car === 'Bicicleta' && (
                  <div className="input">
                    <h3>km</h3>
                    <Input
                      onChange={(h) => setKm(h.currentTarget.value)}
                      placeholder="digite o km do veículo"
                    />
                  </div>
                )}

                {car === 'Bicicleta elétrica' && (
                  <div className="input">
                    <h3>km</h3>
                    <Input
                      onChange={(h) => setKm(h.currentTarget.value)}
                      placeholder="digite o km do veículo"
                    />
                  </div>
                )}

                {car === 'Patinete elétrico' && (
                  <div className="input">
                    <h3>km</h3>
                    <Input
                      onChange={(h) => setKm(h.currentTarget.value)}
                      placeholder="digite o km do veículo"
                    />
                  </div>
                )}
              </div>

              <Closed>
                <ContentButton>
                  {combus !== '0' && car !== '0' && km !== '' && power !== '0' && (
                    <div className="button">
                      <Button title="salvar" variant="A" pres={handleAddItem} />
                    </div>
                  )}

                  {combus === 'Híbrido' && car !== '0' && km !== '' && (
                    <div className="button">
                      <Button title="salvar" variant="A" pres={handleAddItem} />
                    </div>
                  )}

                  {car === 'Bicicleta' && (
                    <div className="button">
                      <Button title="salvar" variant="A" pres={handleAddItem} />
                    </div>
                  )}

                  {car === 'Bicicleta elétrica' && (
                    <div className="button">
                      <Button title="salvar" variant="A" pres={handleAddItem} />
                    </div>
                  )}

                  {car === 'Patinete elétrico' && (
                    <div className="button">
                      <Button title="salvar" variant="A" pres={handleAddItem} />
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
