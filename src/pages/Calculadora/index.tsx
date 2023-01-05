import { useCallback, useState } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { ArrowL } from '../../components/Icones/arrowL'
import { ArrowR } from '../../components/Icones/arrowR'
import { color } from '../../styles/colors'
import { icones } from '../../utils/iconeCalc'
import {
  Box,
  BoxContent,
  BoxIcones,
  BoxSelect,
  Card,
  Container,
  Content,
  ContentIco,
  Ico,
  Input
} from './styles'

import 'keen-slider/keen-slider.min.css'
import {
  IVeiculoCProps,
  ModalVeiculosColetivo
} from '../../components/ModalVeiculosColetivo'
import {
  IVeiculoProps,
  ModalVeiculosPessoal
} from '../../components/ModalVeiculosPessoal'

interface PropsEletric {
  item: string
  co2: number
}

export function Calculadora() {
  const [next, setNext] = useState(1)
  const [item, setItem] = useState<IVeiculoProps[]>([])
  const [itemC, setItemC] = useState<IVeiculoCProps[]>([])

  const [eletric, setEletric] = useState<PropsEletric>({
    item: 'Kw/mês',
    co2: 0,
  } as PropsEletric)

  const handleNext = useCallback(async () => {
    if (next <= 4) {
      setNext(next + 1)
    }
  }, [next])

  const handlePreview = useCallback(async () => {
    if (next > 1) {
      setNext(next - 1)
    }
  }, [next])

  const removeItem = useCallback(
    (id: number) => {
      const index = item.findIndex((h) => h.id === id)

      const arry = [...item]

      if (index !== -1) {
        arry.splice(index, 1)
      }

      console.log(index)

      setItem(arry)
    },
    [item],
  )

  const removeItemC = useCallback(
    (id: number) => {
      const index = itemC.findIndex((h) => h.id === id)

      const arry = [...itemC]

      if (index !== -1) {
        arry.splice(index, 1)
      }

      console.log(index)

      setItemC(arry)
    },
    [itemC],
  )

  const vlorEletric = (eletric.co2 * 173.4678) / 142.28

  const vle = vlorEletric.toFixed(2)
  console.log(vlorEletric)

  return (
    <Box>
      <Header />

      <Container>
        <div className="header">
          <h1>Calcule seu</h1>
          <h1 className="t2">consumo</h1>
        </div>

        <BoxIcones>
          {icones.map((h) => (
            <ContentIco
              progres={h.id === String(next)}
              className="ico"
              key={h.id}
            >
              <Ico src={h.ico} alt={h.ico} />
            </ContentIco>
          ))}
        </BoxIcones>

        <BoxContent>
          {next === 1 && (
            <Card>
              <div className="t">
                <h1>Consumo de </h1>
                <h1 className="t2">eletricidade</h1>
              </div>

              <p>
                Insira seu consumo MENSAL ou o valor pago de energia elétrica.
                As informaçoes constam na sua conta de energia elétrica.
              </p>

              <BoxSelect
                name="eletric"
                value={eletric.item}
                onChange={(h) =>
                  setEletric({
                    item: h.currentTarget.value,
                    co2: eletric.co2,
                  })
                }
              >
                <option value="Kw/mês">Kw/mês</option>
                <option value="R$/mes">R$/mes</option>
              </BoxSelect>
              <Input
                type="text"
                placeholder="Insira o valor"
                onChange={(h) =>
                  setEletric({
                    item: eletric.item,
                    co2: Number(h.currentTarget.value),
                  })
                }
              />
              <div>
                <p>Emissões mensais {vle} (Kg CO2e)</p>
                <p>emissões anuais (Kg CO2e)</p>
              </div>
            </Card>
          )}

          {next === 2 && (
            <Card>
              <div className="t">
                <h1>Consumo de </h1>
                <h1 className="t2">eletricidade</h1>
              </div>

              <p>
                Insira seu consumo MENSAL ou o valor pago de gás. As informações
                constam na sua conta de gás. Mas se preferir pode inserir a
                quantidade de botijões de gás que consome em sua casa.
              </p>

              <BoxSelect
                name="eletric"
                value={eletric.item}
                onChange={(h) =>
                  setEletric({
                    item: h.currentTarget.value,
                    co2: eletric.co2,
                  })
                }
              >
                <option value="Kw/mês">Kw/mês</option>
                <option value="R$/mes">R$/mes</option>
              </BoxSelect>

              <Input type="text" placeholder="Insira o valor" />
              <div>
                <p>Emissões mensais {} (Kg CO2e)</p>
                <p>emissões anuais (Kg CO2e)</p>
              </div>
            </Card>
          )}

          {next === 3 && (
            <Card>
              <div className="t">
                <h1>Transporte</h1>
                <h1 className="t2">individual</h1>
              </div>

              <p>
                Insira as informações sobre o seu transporte individual
                utilizado no dia a dia. É possível inserir mais de um tipo de
                transporte.
              </p>

              <ModalVeiculosPessoal
                setItem={(h: IVeiculoProps) => setItem([...item, h])}
              />

              {/* <ContentItens> */}
              <table>
                <tr>
                  <th>Transporte</th>
                  <th>Quilometragem</th>
                  <th>Emissões (KgCO2e)</th>
                  <th>Excluir</th>
                </tr>

                {item.map((h) => (
                  <tr key={String(h.id)}>
                    <td>
                      {h.Meio_de_transporte}/{h.Combustível_Tipo}
                    </td>
                    <td>{h.Quilometragem}</td>
                    <td>{h.co2}</td>
                    <td>
                      <div className="cancel">
                        <Button
                          title="X"
                          variant="C"
                          pres={() => removeItem(h.id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </table>
              {/* </ContentItens> */}

              <div>
                <p>Emissões mensais (Kg CO2e)</p>
                <p>emissões anuais (Kg CO2e)</p>
              </div>
            </Card>
          )}

          {next === 4 && (
            <Card>
              <div className="t">
                <h1>Transporte</h1>
                <h1 className="t2">coletivo</h1>
              </div>

              <p>
                Insira as informações sobre o seu transporte coletivo utilizado
                no dia a dia. É possível inserir mais de um tipo de transporte.
              </p>

              <ModalVeiculosColetivo
                setItemC={(h: IVeiculoCProps) => setItemC([...itemC, h])}
              />

              <table>
                <tr>
                  <th>Transporte</th>
                  <th>Quilometragem</th>
                  <th>Emissões (KgCO2e)</th>
                  <th>Excluir</th>
                </tr>

                {itemC.map((h) => (
                  <tr key={String(h.id)}>
                    <td>{h.veiculo}</td>
                    <td>{h.Quilometragem}</td>
                    <td>{h.co2}</td>
                    <td>
                      <div className="cancel">
                        <Button
                          title="X"
                          variant="C"
                          pres={() => removeItemC(h.id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </table>
              <div>
                <p>Emissões mensais (Kg CO2e)</p>
                <p>emissões anuais (Kg CO2e)</p>
              </div>
            </Card>
          )}

          {next === 5 && (
            <Card>
              <div className="t">
                <h1>Alimentação</h1>
              </div>
              <p>
                Escolha o consumo que melhor define a sua dieta no dia a dia
              </p>

              <Input type="text" placeholder="R$/mês" />
              <div>
                <p>Emissões mensais (Kg CO2e)</p>
                <p>emissões anuais (Kg CO2e)</p>
              </div>
            </Card>
          )}

          <Content step={next}>
            <div className="p">
              <ArrowL cor={color.green[40]} size="1.5vw" />
              <ArrowL cor={color.green[40]} size="1.5vw" />
              <ArrowL cor={color.green[40]} size="1.5vw" />
            </div>

            <div className="prev">
              <div>
                <Button pres={handlePreview} title="Voltar" variant="A" />
              </div>
            </div>

            <div className="next">
              <div>
                <Button
                  pres={handleNext}
                  title={next === 5 ? 'Resultado' : 'Próximo'}
                  variant="AB"
                />
              </div>
            </div>

            <div className="n">
              <ArrowR cor={color.green[40]} size="1.5vw" />
              <ArrowR cor={color.green[40]} size="1.5vw" />
              <ArrowR cor={color.green[40]} size="1.5vw" />
            </div>
          </Content>
        </BoxContent>
      </Container>
    </Box>
  )
}
