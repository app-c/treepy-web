import * as Dialog from '@radix-ui/react-dialog'
import { Form } from '@unform/web'
import React, { useState } from 'react'
import { _number } from '../../utils/formatNumber'
import { veiculosC } from '../../utils/veiculosCol'
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

export interface IVeiculoCProps {
  veiculo: string
  Quilometragem: number
  id: number
  co2: number
}

interface Props {
  setItemC: (h: IVeiculoCProps) => void
}

export function ModalVeiculosColetivo({ setItemC }: Props) {
  const [car, setCar] = useState('0')
  const [km, setKm] = useState('')

  const handleAddItem = React.useCallback(() => {
    let rs = {} as IVeiculoCProps

    veiculosC.forEach((h) => {
      const kmf = _number(km)
      if (car === h.veiculo) {
        rs = {
          ...h,
          veiculo: car,
          Quilometragem: Number(kmf),
          co2: (Number(km) * h.co2) / 1000,
        }
      }
    })

    console.log(rs)
    setItemC(rs)

    setCar('0')
    setKm('')
  }, [car, km, setItemC])

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

                {/* OPTONS */}

                {car === '0' && (
                  <BoxSelect
                    onChange={(h) => setCar(h.currentTarget.value)}
                    name="car"
                    value={car}
                  >
                    {veiculosC.map((h) => (
                      <option key={h.id} value={h.veiculo}>
                        {h.veiculo}
                      </option>
                    ))}
                  </BoxSelect>
                )}

                {car !== '0' && (
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
