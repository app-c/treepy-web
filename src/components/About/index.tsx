import React from 'react'
import inova from '../../assets/inova.png'
import flor1 from '../../assets/flor-1.png'
import flor from '../../assets/flor.png'
import { Button } from '../Button'
import {
  Box,
  BoxContent,
  BoxTexts,
  Container,
  Content,
  Image,
  Inova,
  Mission,
  Texts,
} from './styles'

interface Props {
  type: 'a' | 'b'
}
export function About() {
  const [showRead, setShowRead] = React.useState(true)
  return (
    <Container>
      <Content readMor={showRead}>
        <BoxTexts readMor={showRead}>
          <h3>Agir Agora é preciso: Nós precisamos de você!</h3>
          <div>
            <p>
              Estamos enfrentando uma crise climática. Nenhum desafio representa
              uma ameaça maior para as gerações futuras do que as mudanças
              climáticas. O desmatamento com certeza é uma das principais causas
              que estão ligados às mudanças climáticas. Se continuarmos nessa
              trajetória, o futuro da natureza, junto com o nosso, estará em
              perigo. Sem o reflorestamento, a humanidade, a vida selvagem e o
              planeta que conhecemos e amamos sofrerão.
            </p>
            {showRead && (
              <div>
                <p>
                  Precisamos começar hoje mesmo a mudar a maneira como
                  escolhemos e usamos energia e recursos. Através do
                  reflorestamento sabemos que essa realidade pode mudar. Reduzir
                  ou zerar a poluição por carbono para reduzir os impactos das
                  mudanças climáticas e inspirar outros países a fazer o mesmo.
                </p>

                <Box>
                  <Mission>
                    <BoxContent>
                      <h3>Missão</h3>
                      <p>
                        Criar um futuro brilhante para as próximas gerações. Nos
                        unir em nome da preservação do nosso planeta amado.
                        Juntos, podemos fazer a diferença e garantir um futuro
                        vibrante para todos.
                      </p>
                    </BoxContent>

                    <BoxContent>
                      <h3>Visão</h3>
                      <p>
                        Ser a principal empresa que através dos créditos
                        TreepyCash tornar o futuro sustentável, onde a
                        tecnologia e a inovação trabalham em harmonia com o meio
                        ambiente para proteger o planeta e garantir uma vida
                        saudável para as gerações futuras
                      </p>
                    </BoxContent>

                    <BoxContent>
                      <h3>Valores</h3>
                      <p>
                        Atuamos com os mais altos valores de ética, moral e
                        responsabilidade ambiental baseados nos princípios da
                        ESG. {'\n'} A integridade dos valores ESG é vista como
                        fundamental para o sucesso a longo prazo das empresas,
                        especialmente na era atual de conscientização e
                        preocupação com o meio ambiente e a responsabilidade
                        social.
                      </p>
                    </BoxContent>
                  </Mission>
                </Box>
                {/* 
                  <h3>
                    Para onde vai o TreepyCash gerado através das minhas
                    compras?
                  </h3>

                  <p>
                    A Equipe Treepy selecionará os melhores projetos que visam
                    reduzir a emissão dos gases de efeito estufa (GEE) e atuam
                    ativamente contra as mudanças climáticas e o aquecimento
                    global.
                  </p>

                  <h3>Preservação de florestas nativas</h3>
                  <p>
                    {'\n'} São projetos que reduzem as emissões de Gases de
                    Efeito Estufa (GEE) a partir da proteção da floresta, que na
                    ausência do projeto seria desmatada de forma não planejada.
                  </p>

                  <h3>Reflorestamento e regeneração natural</h3>
                  <p>
                    São projetos que sequestram Gases de Efeito Estufa (GEE) da
                    atmosfera a partir do reflorestamento com espécies nativas
                    em áreas já desmatadas. Além disso, tais projetos também
                    ajudam na reconstituição da biodiversidade local, aumentando
                    as áreas verdes e criando corredores ecológicos, bem como
                    colaboram para a manutenção dos recursos hídricos, e geram
                    empregos à comunidade local em atividades de monitoramento,
                    patrulhamento e manejo sustentável de recursos não
                    madeireiros.
                  </p>

                  <h3>Agricultura regenerativa</h3>
                  <p>
                    Agricultura regenerativa São projetos que sequestram Gases
                    de Efeito Estufa (GEE) da atmosfera para o solo a partir da
                    recuperação de pastagens degradadas, e da transição de
                    sistemas de produção tradicionais para sistemas
                    agroecológicos e agroflorestais. Além de aumentarem a
                    matéria orgânica no solo, tais projetos também ajudam na
                    recomposição da biodiversidade, e na manutenção dos recursos
                    hídricos. Tudo isso você poderá acompanhar em tempo real em
                    nossa plataforma. Basta efetuar seu login e acompanhar o
                    nosso trabalho.
                  </p> */}
              </div>
            )}
          </div>
        </BoxTexts>
      </Content>
    </Container>
  )
}
