import React from 'react'
import inova from '../../assets/inova.png'
import flor from '../../assets/mundo_mao.jpg'
import { Button } from '../Button'
import {
  BoxTexts,
  Container,
  Content,
  Image,
  Inova,
  Mission,
  Texts,
} from './styles'

export function About2() {
  const [showRead, setShowRead] = React.useState(false)
  return (
    <Container>
      <Content readMor={showRead}>
        <div className="image">
          <Image readMor={showRead} src={flor} alt="mundo" />
        </div>

        <BoxTexts readMor={showRead}>
          <h1>A Treepy</h1>
          <Texts>
            O reflorestamento é crucial para o planeta, não apenas no Brasil,
            mas em todo o mundo. As florestas são os pulmões da Terra,
            fornecendo oxigênio e absorvendo o dióxido de carbono da atmosfera.
          </Texts>

          <Texts>
            Somos a esperança de mudar a realidade atual do meio ambiente no
            Brasil. Criamos uma empresa que dá oportunidade para qualquer pessoa
            ou negócio contribuir para a restauração da floresta e preservar
            recursos hídricos importantes para o planeta.
          </Texts>

          <Texts>
            Juntos, podemos dar um novo passo em direção a um futuro mais verde
            e sustentável, somos a Treepy.
          </Texts>

          {showRead && (
            <div>
              <Texts>
                Ao plantar árvores, podemos ajudar a compensar as emissões de
                dióxido de carbono e, assim, reduzir o impacto da mudança
                climática. Além disso, as florestas também são uma fonte
                importante de diversidade biológica e habitat para muitas
                espécies animais e vegetais.
              </Texts>

              <Texts>
                Investindo em um futuro sustentável, juntamos forças para a
                preservação do meio ambiente e a criação de um mundo melhor para
                as gerações futuras. Com a incorporação de tecnologia e
                inovação, trabalhamos arduamente na redução de emissões de CO2,
                transformando o que antes era visto como um custo em uma
                oportunidade de investimento de valor.
              </Texts>

              <Texts>
                Em resumo, o reflorestamento é crucial para a saúde do nosso
                planeta e para a luta contra a mudança climática. Além disso, o
                Treepy Cash é uma maneira eficaz de incentivar o
                reflorestamento, fornecendo uma alternativa econômica para a
                preservação das florestas. É hora de agir agora, para garantir
                um futuro mais verde e saudável para nós e para as gerações
                futuras.
              </Texts>

              <Mission>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '3rem',
                  }}
                >
                  <h3>Inovação</h3>
                  <Texts>
                    O TreepyCash é uma maneira que a Treepy criou para
                    incentivar o reflorestamento. Ele funciona como uma moeda
                    virtual que representa a quantidade de árvores que serão
                    plantadas na natureza.
                  </Texts>

                  <Texts>
                    Você poderá adquirir seus Treepycash diretamente no nosso
                    site, ou pelas compras de produtos ou serviços em nossos
                    parceiros. Assim pode´ra compensar suas emeissões de gases
                    de efeito estufa com reflorestamento.
                  </Texts>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '3rem',
                  }}
                >
                  <h3>Parcerias</h3>
                  <Texts>
                    Precisamos começar hoje mesmo a maneira como criamos valor
                    para os seus clientes e negócios através das ações de
                    reflorestamento.
                  </Texts>

                  <Texts>
                    Muitos negócios gastam recursos e tempo para atingirem
                    objetivos técnicos porém sem transcender o valor disso tudo
                    as pessoas que estão sendo impactadas na ponta.
                  </Texts>

                  <Texts>
                    Mude isso com a Treepy e vamos juntos criar valor para
                    todos, entre em contato para montarmos a parceria certaa
                    para o seu negócio.
                  </Texts>
                </div>
              </Mission>
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
    </Container>
  )
}
