import {
  Box,
  BoxContent,
  BoxIcones,
  ButtonAdd,
  Card,
  Container,
  Content,
  ContentIco,
  ContentItens,
  Ico,
  Input,
} from './styles'
import { icones } from '../../utils/iconeCalc'
import { Header } from '../../components/Header'
import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'
import { ArrowL } from '../../components/Icones/arrowL'
import { ArrowR } from '../../components/Icones/arrowR'
import { color } from '../../styles/colors'
import { useCallback, useState } from 'react'

export function Calculadora() {
  const [next, setNext] = useState(1)

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

  console.log(next)

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

              <Input type="text" placeholder="R$/mês" />
              <Input type="text" placeholder="Insira o valor" />
              <div>
                <p>Emissões mensais (Kg CO2e)</p>
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

              <Input type="text" placeholder="R$/mês" />
              <Input type="text" placeholder="Insira o valor" />
              <div>
                <p>Emissões mensais (Kg CO2e)</p>
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

              <ButtonAdd>adicionar transporte</ButtonAdd>

              {/* <ContentItens> */}
              <table>
                <tr>
                  <th>Transporte</th>
                  <th>Quilometragem</th>
                  <th>Emissões (KgCO2e)</th>
                  <th>Excluir</th>
                </tr>

                <tr>
                  <td>Carro-gasollina</td>
                  <td>2.000</td>
                  <td>256.00000</td>
                  <td>
                    <div className="cancel">
                      <Button title="X" variant="C" pres={() => {}} />
                    </div>
                  </td>
                </tr>
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

              <ButtonAdd>adicionar transporte</ButtonAdd>

              <table>
                <tr>
                  <th>Transporte</th>
                  <th>Quilometragem</th>
                  <th>Emissões (KgCO2e)</th>
                  <th>Excluir</th>
                </tr>

                <tr>
                  <td>Carro-gasollina</td>
                  <td>2.000</td>
                  <td>256.00000</td>
                  <td>
                    <div className="cancel">
                      <Button title="X" variant="C" pres={() => {}} />
                    </div>
                  </td>
                </tr>
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
