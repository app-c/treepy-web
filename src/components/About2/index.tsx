import React from 'react'
import flor from '../../assets/mundo_mao.jpg'
import { Button } from '../Button'
import * as S from './styles'
import selo from '../../assets/selo.png'

export function About2() {
  const [showRead, setShowRead] = React.useState(false)
  return (
    <S.Container>
      <S.Content readMor={showRead}>
        {!showRead && (
          <div className="image">
            <S.Image readMor={showRead} src={flor} alt="mundo" />
          </div>
        )}

        <S.BoxTexts readMor={showRead}>
          <h1>A Treepy</h1>
          <S.Texts>
            Nascemos da convicção que juntos podemos contribuir na restauração
            das florestas e na mitigação das emissões de CO2 na atmosfera.
          </S.Texts>

          <S.Texts>
            Ajudamos a mudar a realidade atual do meio ambiente no Brasil.
            Criamos uma empresa que dá oportunidade para qualquer pessoa ou
            negócio contribuir para um mundo mais verde e sustentável.
          </S.Texts>

          <S.Texts>
            Juntos, podemos dar esse passo em direção a um futuro melhor, somos
            a Treepy.
          </S.Texts>

          <S.Texts>
            {' '}
            A Treepy foi uma das Startups aceleradas pelo programa “InoVativa
            Brasil”
          </S.Texts>

          {showRead && (
            <div>
              <S.Texts>
                O reflorestamento é crucial não apenas no Brasil, mas em todo o
                mundo. As florestas são os pulmões da Terra, fornecendo oxigênio
                e absorvendo o CO2 da atmosfera.
              </S.Texts>

              <S.Texts>
                Ao plantar árvores, podemos ajudar a compensar as emissões de
                CO2 e, assim, reduzir o impacto das mudanças climáticas.
                Investindo em um futuro sustentável, juntamos forças para a
                preservação do meio ambiente e a criação de um mundo melhor para
                as gerações futuras.
              </S.Texts>

              <S.Texts>
                Em resumo, o reflorestamento é crucial para a saúde do nosso
                planeta e para a luta contra a mudança climática. Além disso, o
                Treepy Cash é uma maneira eficaz de incentivar o
                reflorestamento, fornecendo uma alternativa econômica para a
                preservação das florestas. É hora de agir agora, para garantir
                um futuro mais verde e saudável para nós e para as gerações
                futuras.
              </S.Texts>

              <S.Mission>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '3rem',
                  }}
                >
                  <h3 style={{ alignSelf: 'flex-start' }}>Conheça a Treepy</h3>
                  <h4 style={{ alignSelf: 'flex-start', marginTop: 15 }}>
                    Missão
                  </h4>

                  <S.Texts>
                    “Transformar a cultura das pessoas, criando oportunidade
                    para todos contribuírem de forma sustentável para o
                    reflorestamento do planeta”
                  </S.Texts>

                  <h4 style={{ alignSelf: 'flex-start', marginTop: 15 }}>
                    Visão
                  </h4>

                  <S.Texts>
                    “Ser reconhecida como a principal plataforma de geração de
                    valor para o meio ambiente perante nossos clientes,
                    parceiros e usuários”
                  </S.Texts>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '3rem',
                    paddingLeft: '4vw',
                  }}
                >
                  <h3 style={{ alignSelf: 'flex-start' }}>Nossos Valores:</h3>
                  <S.ul>
                    <S.li>Inovação</S.li>
                    <S.li>Ética e Transparência</S.li>
                    <S.li>Excelência no que faz</S.li>
                    <S.li>Realizaão no trabalho</S.li>
                    <S.li>Compromisso Ambiental</S.li>
                  </S.ul>
                </div>
              </S.Mission>
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

            <S.selo src={selo} />
          </div>
        </S.BoxTexts>
      </S.Content>

      <h3 style={{ alignSelf: 'center', marginTop: 20 }}></h3>
    </S.Container>
  )
}
