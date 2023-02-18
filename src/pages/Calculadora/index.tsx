import { useCallback, useMemo, useState } from 'react'
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
  BoxResultado,
  BoxSelect,
  Card,
  Container,
  ContainerResult,
  Content,
  ContentIco,
  Ico,
  SubTitle,
  Table,
} from './styles'

import { food } from '../../utils/food'

import 'keen-slider/keen-slider.min.css'
import {
  IVeiculoCProps,
  ModalVeiculosColetivo,
} from '../../components/ModalVeiculosColetivo'
import {
  IVeiculoProps,
  ModalVeiculosPessoal,
} from '../../components/ModalVeiculosPessoal'
import { Form } from '@unform/web'
import { Input } from '../../components/Input'
import { json, Link } from 'react-router-dom'
import { HeaderC } from '../../components/HeaderC'

interface PropsItens {
  item: 'Kw/mês' | 'R$/mês' | 'm³/mês' | 'Botijões/mês' | string
  co2: number
}

interface PropsFood {
  item: string
  co2: number
}

export function Calculadora() {
  const [step, setStep] = useState(1)
  const [item, setItem] = useState<IVeiculoProps[]>([])
  const [itemC, setItemC] = useState<IVeiculoCProps[]>([])

  const [itemFood, setItemFood] = useState<PropsFood>({
    item: 'Selecione sua dieta',
    co2: 0,
  } as PropsFood)

  const [eletric, setEletric] = useState<PropsItens>({
    item: 'Kw/mês',
    co2: 0,
  } as PropsItens)

  const [gas, setGas] = useState<PropsItens>({
    item: 'R$/mês',
    co2: 0,
  } as PropsItens)

  const handleNext = useCallback(async () => {
    if (step <= 5) {
      setStep(step + 1)
    }
  }, [step])

  const handlePreview = useCallback(async () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }, [step])

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

  const totalCo2 = useMemo(() => {
    let vlMsEletriv = 0
    let vlAnEletriv = 0

    let vlMsGas = 0
    let vlAnGas = 0

    let vlFoodMes = 0
    let vlFoodAno = 0

    if (eletric.item === 'Kw/mês') {
      vlMsEletriv = (eletric.co2 * 12.45) / 166
      vlAnEletriv = (eletric.co2 * 149.4) / 166
    }

    if (eletric.item === 'R$/mês') {
      vlMsEletriv = ((eletric.co2 / 100) * 14.4556) / 142.28
      vlAnEletriv = ((eletric.co2 / 100) * 173.4678) / 142.28
    }

    if (gas.item === 'R$/mês') {
      vlMsGas = ((gas.co2 / 100) * 21.8688) / 136.68
      vlAnGas = ((gas.co2 / 100) * 262.4256) / 136.68
    }

    if (gas.item === 'm³/mês') {
      vlMsGas = (gas.co2 * 21.8688) / 136.68
      vlAnGas = (gas.co2 * 262.4256) / 136.68
    }

    if (gas.item === 'Botijões/mês') {
      vlMsGas = (gas.co2 * 0.3673) / 0.125
      vlAnGas = (gas.co2 * 4.407) / 0.125
    }

    const veiInd = item.reduce((ac, i) => {
      return ac + i.co2
    }, 0)

    const veiCol = itemC.reduce((ac, i) => {
      return ac + i.co2
    }, 0)

    const vlTransIndMes = veiInd
    const vlTransIndAnu = veiInd * 12

    const vlTransColMes = veiCol
    const vlTransColAnu = veiCol * 12

    food.forEach((h) => {
      if (h.fod === itemFood.item) {
        vlFoodMes = h.co2 / 12
        vlFoodAno = h.co2
      }
    })

    const vlEM = vlMsEletriv.toFixed(2)
    const vlAN = vlAnEletriv.toFixed(2)
    const vlMGas = vlMsGas.toFixed(2)
    const vlANGas = vlAnGas.toFixed(2)
    const vlFMes = vlFoodMes.toFixed(2)
    const vlFAno = vlFoodAno.toFixed(2)

    const transIndMes = vlTransIndMes.toFixed(2)
    const transIndAnu = vlTransIndAnu.toFixed(2)

    const transColMes = vlTransColMes.toFixed(2)
    const transColAnu = vlTransColAnu.toFixed(2)

    const tl = vlAnEletriv + vlAnGas + vlTransColAnu + vlTransIndAnu + vlFoodAno

    const total = [
      {
        item: 'Eletricidade',
        co2: vlAnEletriv / 1000,
        porcent: vlAnEletriv > 0 ? (vlAnEletriv / tl) * 100 : 0,
      },

      {
        item: 'Gás',
        co2: vlAnGas / 1000,
        porcent: vlAnGas > 0 ? (vlAnGas / tl) * 100 : 0,
      },

      {
        item: 'Transporte individual',
        co2: vlTransIndAnu / 1000,
        porcent: vlTransIndAnu > 0 ? tl / vlTransIndAnu : 0,
      },

      {
        item: 'Transporte coletivo',
        co2: vlTransColAnu / 1000,
        porcent: vlTransColAnu > 0 ? (vlTransColAnu / tl) * 100 : 0,
      },

      { item: 'Resíduos sólidos', co2: 0, porcent: 0 },

      {
        item: 'Alimentação',
        co2: vlFoodAno / 1000,
        porcent: vlFoodAno > 0 ? (vlFoodAno / tl) * 100 : 0,
      },

      { item: 'total', co2: tl / 1000, porcent: tl > 0 ? (tl / tl) * 100 : 0 },
    ]

    return {
      eleTric: { mes: vlEM, anual: vlAN },
      gas: { mes: vlMGas, anual: vlANGas },
      food: { mes: vlFMes, anual: vlFAno },
      transInd: { mes: transIndMes, anual: transIndAnu },
      transCol: { mes: transColMes, anual: transColAnu },
      total,
    }
  }, [eletric.co2, eletric.item, gas.co2, gas.item, item, itemC, itemFood.item])

  let tree = (totalCo2.total[6].co2 * 5) / 0.9606
  const [u, c] = String(tree).split('.').map(Number)
  tree = c > 5 ? u + 1 : u
  const brl = tree * 26.9

  const data = {
    tree,
    brl,
  }

  const dt = JSON.stringify(data)

  return (
    <Box step={step}>
      <HeaderC type="3" />

      {step === 6 ? (
        <BoxResultado>
          <BoxIcones>
            {icones.map((h) => (
              <ContentIco
                progres={h.id === String(step)}
                className="ico"
                key={h.id}
              >
                <Ico src={h.ico} alt={h.ico} />
              </ContentIco>
            ))}
          </BoxIcones>

          <ContainerResult>
            <div className="table">
              <p className="title">Resultado</p>
              <p>Resumo anual de suas emissões de gases de efeito estufa</p>

              <table>
                <tr>
                  <th>Fonte</th>
                  <th>Emissões (CO₂)</th>
                  <th>%</th>
                </tr>

                {totalCo2.total.map((h) => (
                  <tr key={h.item}>
                    <td>{h.item}</td>
                    <td>{h.co2.toFixed(3)}</td>
                    <td>{h.porcent.toFixed(2)} %</td>
                  </tr>
                ))}
              </table>

              <p className="botton">
                Para compensar suas emeissões de CO₂ é necessário plantar{' '}
                <span>{tree.toFixed(0)} árvores/ano.</span>
              </p>
            </div>

            <div className="result">
              <h1>TreepyCash</h1>
              <label htmlFor="">
                <h3>R$</h3>
                <h1 style={{ marginLeft: 10 }}>{brl.toFixed(2)}</h1>
              </label>

              <p>
                Compre agora à vista ou parcele os seus{' '}
                <span>TreepyCashes</span>{' '}
              </p>
              <p>
                Comece agora a compensação com apenas um <span>TreepCash</span>
              </p>

              <div className="modalbox">
                <Button
                  pres={() => setStep(1)}
                  variant="C"
                  sizeW="10rem"
                  title="REFAZER"
                />
                <Link to={`/plan/${dt}`} style={{ textDecoration: 'none' }}>
                  <Button title="veja os planos" sizeW="10rem" variant="AB" />
                </Link>
              </div>
            </div>
          </ContainerResult>
        </BoxResultado>
      ) : (
        <Container>
          <div className="header">
            <h2>
              Calcule seu <span>consumo</span>{' '}
            </h2>
          </div>

          <BoxIcones>
            {icones.map((h) => (
              <ContentIco
                progres={h.id === String(step)}
                className="ico"
                key={h.id}
              >
                <Ico src={h.ico} alt={h.ico} />
              </ContentIco>
            ))}
          </BoxIcones>

          <BoxContent>
            {step === 1 && (
              <>
                <SubTitle>
                  Consumo de <span className="ele">energia elétrica</span>{' '}
                </SubTitle>
                <Form onSubmit={() => {}}>
                  <Card>
                    <p>
                      Insira seu consumo MENSAL ou o valor pago de energia
                      elétrica. As informações constam na sua conta de energia
                      elétrica.
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
                      <option value="Kwh/mês">Kwh/mês</option>
                      <option value="R$/mês">R$/mês</option>
                    </BoxSelect>

                    <Input
                      sizeH="2rem"
                      name="eletric"
                      mask={eletric.item === 'Kw/mês' ? 'number' : 'price'}
                      placeholder="Insira o valor"
                      onChange={(h) => {
                        let vl = h.currentTarget.value
                        vl = vl.replace(/\D/g, '')

                        setEletric({
                          item: eletric.item,
                          co2: Number(vl),
                        })
                      }}
                    />
                    <div>
                      <p>Emissão mensal: {totalCo2.eleTric.mes} (kg CO₂e)</p>
                      <p>emissão anual: {totalCo2.eleTric.anual} (kg CO₂e)</p>
                    </div>
                  </Card>
                </Form>
              </>
            )}

            {step === 2 && (
              <>
                <SubTitle>
                  Consumo de <span className="t2">Gás</span>{' '}
                </SubTitle>
                <Card>
                  <p>
                    Insira seu consumo MENSAL ou o valor pago de gás. As
                    informações constam na sua conta de gás. Mas se preferir
                    pode inserir a quantidade de botijões de gás que consome em
                    sua casa.
                  </p>

                  <BoxSelect
                    name="gas"
                    value={gas.item}
                    onChange={(h) =>
                      setGas({
                        item: h.currentTarget.value,
                        co2: gas.co2,
                      })
                    }
                  >
                    <option value="R$/mês">R$/mês</option>
                    <option value="m³/mês">m³/mes</option>
                    <option value="Botijões/mês">Botijões/mês</option>
                  </BoxSelect>
                  <Form onSubmit={() => {}} className="form">
                    <Input
                      mask={gas.item === 'R$/mês' ? 'price' : 'number'}
                      name="gas"
                      sizeH="2rem"
                      type="text"
                      placeholder="Insira o valor"
                      onChange={(h) => {
                        let vl = h.currentTarget.value
                        vl = vl.replace(/\D/g, '')
                        setGas({
                          item: gas.item,
                          co2: Number(vl),
                        })
                      }}
                    />
                  </Form>
                  <div>
                    <p>Emissões mensais: {totalCo2.gas.mes} (kg CO₂e)</p>
                    <p>emissões anuais: {totalCo2.gas.anual} (kg CO₂e)</p>
                  </div>
                </Card>
              </>
            )}

            {step === 3 && (
              <>
                <div className="t">
                  <h1>
                    Transporte <span className="t2">individual</span>
                  </h1>
                </div>
                <Card>
                  <p>
                    Insira as informações sobre o seu transporte individual
                    utilizado no dia a dia. É possível inserir mais de um tipo
                    de transporte.
                  </p>

                  <ModalVeiculosPessoal
                    setItem={(h: IVeiculoProps) => setItem([...item, h])}
                  />

                  {/* <ContentItens> */}
                  <Table>
                    <tr>
                      <th>Transporte</th>
                      <th>Quilometragem</th>
                      <th>Emissões (KgCO₂e)</th>
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
                          <div className="button-cancel">
                            <Button
                              title="X"
                              variant="C"
                              pres={() => removeItem(h.id)}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </Table>
                  {/* </ContentItens> */}

                  <div>
                    <p>Emissões mensais: {totalCo2.transInd.mes} (kg CO₂e)</p>
                    <p>emissões anuais: {totalCo2.transInd.anual} (kg CO₂e)</p>
                  </div>
                </Card>
              </>
            )}

            {step === 4 && (
              <>
                <div className="t">
                  <h1>
                    Transporte <span className="t2">Coletivo</span>{' '}
                  </h1>
                </div>
                <Card>
                  <p>
                    Insira as informações sobre o seu transporte coletivo
                    utilizado no dia a dia. É possível inserir mais de um tipo
                    de transporte.
                  </p>

                  <ModalVeiculosColetivo
                    setItemC={(h: IVeiculoCProps) => setItemC([...itemC, h])}
                  />

                  <Table>
                    <tr>
                      <th>Transporte</th>
                      <th>Quilometragem</th>
                      <th>Emissões (KgCO₂e)</th>
                      <th>Excluir</th>
                    </tr>

                    {itemC.map((h) => (
                      <tr key={String(h.id)}>
                        <td>{h.veiculo}</td>
                        <td>{h.Quilometragem}</td>
                        <td>{h.co2}</td>
                        <td>
                          <div className="button-cancel">
                            <Button
                              title="X"
                              variant="C"
                              pres={() => removeItemC(h.id)}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </Table>
                  <div>
                    <p>Emissões mensais: {totalCo2.transCol.mes} (kg CO₂e)</p>
                    <p>emissões anuais: {totalCo2.transCol.anual} (kg CO₂e)</p>
                  </div>
                </Card>
              </>
            )}

            {step === 5 && (
              <>
                <div className="t">
                  <h1>Alimentação</h1>
                </div>

                <Card>
                  <p>
                    Escolha o consumo que melhor define a sua dieta no dia a dia
                  </p>

                  <BoxSelect
                    value={itemFood.item}
                    onChange={(h) => {
                      setItemFood({
                        item: h.currentTarget.value,
                        co2: itemFood.co2,
                      })
                    }}
                  >
                    {food.map((h) => (
                      <option key={h.fod} value={h.fod}>
                        {h.fod}
                      </option>
                    ))}
                  </BoxSelect>
                  <div>
                    <p>Emissões mensais: {totalCo2.food.mes} (kg CO₂e)</p>
                    <p>emissões anuais: {totalCo2.food.anual} (kg CO₂e)</p>
                  </div>
                </Card>
              </>
            )}

            <Content step={step}>
              <div className="p">
                <ArrowL cor={color.green[40]} size="1.5vw" />
                <ArrowL cor={color.green[40]} size="1.5vw" />
                <ArrowL cor={color.green[40]} size="1.5vw" />
              </div>

              <div className="prev">
                <Button
                  sizeH="2.5rem"
                  sizeW="8rem"
                  pres={handlePreview}
                  title="Voltar"
                  variant="A"
                />
              </div>

              <div className="step">
                <div>
                  <Button
                    pres={handleNext}
                    title={step === 5 ? 'Resultado' : 'Próximo'}
                    variant="AB"
                    sizeH="2.5rem"
                    sizeW="8.6rem"
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
      )}
    </Box>
  )
}
