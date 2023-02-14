import React from 'react'
import inova from '../../assets/inova.png'
import world from '../../assets/mundo_mao.jpg'
import { Button } from '../Button'
import {
  Box,
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
export function About({ type = 'a' }: Props) {
  const [showRead, setShowRead] = React.useState(false)
  return (
    <Container>
      {type === 'a' && (
        <Content readMor={showRead}>
          <div className="image">
            <Image readMor={showRead} src={world} alt="mundo" />
          </div>

          <BoxTexts readMor={showRead}>
            <h1>A Treepy</h1>
            <Texts>
              Somos a esperança de mudar a realidade de degradação do meio
              ambiente e da falta de florestas no Brasil. Somos a chance de
              contribuir para a proteção da biodiversidade, da fauna e da flora,
              e de preservar recursos hídricos importantes para o planeta.
              Juntos, podemos dar um novo passo em direção a um futuro mais
              verde e sustentável, somo a Treepy.
            </Texts>

            {showRead && (
              <div>
                <Texts>
                  O reflorestamento é crucial para o planeta, não apenas no
                  Brasil, mas em todo o mundo. As florestas são os pulmões da
                  Terra, fornecendo oxigênio e absorvendo o dióxido de carbono
                  da atmosfera. Infelizmente, a devastação florestal tem sido
                  uma das principais causas da mudança climática, com a perda de
                  milhões de hectares de florestas ao redor do mundo todos os
                  anos.
                </Texts>

                <Texts>
                  Mas o reflorestamento pode ser parte da solução. Ao plantar
                  árvores, podemos ajudar a compensar as emissões de dióxido de
                  carbono e, assim, reduzir o impacto da mudança climática. Além
                  disso, as florestas também são uma fonte importante de
                  diversidade biológica e habitat para muitas espécies animais e
                  vegetais.
                </Texts>

                <Texts>
                  O Treepy Cash é uma maneira que a Treepy criou para incentivar
                  o reflorestamento. Ele funciona como uma moeda virtual que
                  representa a quantidade de árvores que serão replantadas em
                  florestas. Você poderá adquirir seus Treppycash diretamente em
                  nosso site ou na compra de seus produtos nos parceiros
                  credenciados, gerando assim os seus créditos para o
                  reflorestamento. Assim poderá compensar suas emissões de gases
                  de efeito estufa, apoiando o reflorestamento ao mesmo tempo.
                </Texts>

                <Texts>
                  Investindo em um futuro sustentável, juntamos forças para a
                  preservação do meio ambiente e a criação de um mundo melhor
                  para as gerações futuras. Com a incorporação de tecnologia e
                  inovação, trabalhamos arduamente na redução de emissões de
                  CO2, transformando o que antes era visto como um custo em uma
                  oportunidade de investimento de valor.
                </Texts>

                <Texts>
                  Em resumo, o reflorestamento é crucial para a saúde do nosso
                  planeta e para a luta contra a mudança climática. Além disso,
                  o Treepy Cash é uma maneira eficaz de incentivar o
                  reflorestamento, fornecendo uma alternativa econômica para a
                  preservação das florestas. É hora de agir agora, para garantir
                  um futuro mais verde e saudável para nós e para as gerações
                  futuras.
                </Texts>
              </div>
            )}

            <div className="interact">
              <div className="buton">
                <Button
                  pres={() => setShowRead(!showRead)}
                  title={showRead ? 'MENOS' : 'LEIA MAIS'}
                  variant="AC"
                />
              </div>

              <Inova src={inova} />
            </div>
          </BoxTexts>
        </Content>
      )}

      {type === 'b' && (
        <Content readMor={showRead}>
          <div className="image">
            <Image readMor={showRead} src={world} alt="mundo" />
          </div>

          <BoxTexts readMor={showRead}>
            <h2>Agir Agora é preciso: Nós precisamos de você!</h2>
            <div>
              <p>
                Estamos enfrentando uma crise climática. Nenhum desafio
                representa uma ameaça maior para as gerações futuras do que as
                mudanças climáticas. O desmatamento com certeza é uma das
                principais causas que estão ligados às mudanças climáticas. Se
                continuarmos nessa trajetória, o futuro da natureza, junto com o
                nosso, estará em perigo. Sem o reflorestamento, a humanidade, a
                vida selvagem e o planeta que conhecemos e amamos sofrerão.
              </p>
              {showRead && (
                <div>
                  <p>
                    Precisamos começar hoje mesmo a mudar a maneira como
                    escolhemos e usamos energia e recursos. Através do
                    reflorestamento sabemos que essa realidade pode mudar.
                    Reduzir ou zerar a poluição por carbono para reduzir os
                    impactos das mudanças climáticas e inspirar outros países a
                    fazer o mesmo.
                  </p>

                  <Box>
                    <Mission>
                      <div>
                        <h3 style={{ marginTop: 20 }}>Missão</h3>
                        <p>
                          Criar um futuro brilhante para as próximas gerações.
                          Nos unir em nome da preservação do nosso planeta
                          amado. Juntos, podemos fazer a diferença e garantir um
                          futuro vibrante para todos.
                        </p>
                      </div>

                      <div>
                        <h3>Visão</h3>
                        <p>
                          Ser a principal empresa que através dos créditos
                          TreepyCash tornar o futuro sustentável, onde a
                          tecnologia e a inovação trabalham em harmonia com o
                          meio ambiente para proteger o planeta e garantir uma
                          vida saudável para as gerações futuras
                        </p>
                      </div>

                      <div>
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
                      </div>
                    </Mission>
                  </Box>

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
                  </p>
                </div>
              )}
            </div>

            <div className="interact">
              <Button
                pres={() => setShowRead(!showRead)}
                title={showRead ? 'MENOS' : 'LEIA MAIS'}
                variant="AC"
                sizeH="40px"
                sizeW="200px"
              />

              <Inova src={inova} />
            </div>
          </BoxTexts>
        </Content>
      )}
    </Container>
  )
}
