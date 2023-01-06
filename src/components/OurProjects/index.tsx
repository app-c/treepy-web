import { color } from '../../styles/colors'
import { Folha } from '../Icones/folha'
import { Logo } from '../Logo'
import { Box, BoxText, Container, ContentImage, ContentText } from './styles'

export function OurProject() {
  return (
    <Container>
      <ContentImage />

      <ContentText>
        <div className="header">
          <h1>Nossos Projetos</h1>
          <p>
            Por meio de uma iniciativa inovadora, a tecnologia agora é uma
            aliada na compensação ambiental.
          </p>
          <line />
        </div>

        <div className="content">
          <Box>
            <div className="folha1">
              <Folha cor={color.green[40]} />
            </div>

            <BoxText>
              <h3>Acompanhe o plantio das suas árvores</h3>
              <p>
                você poderá acompanhar o plantio das suas árvores através de
                nossa plataforma web, naárea do cliente.
              </p>
            </BoxText>
          </Box>

          <Box>
            <div className="folha">
              <Folha />
            </div>

            <BoxText>
              <h3>
                Copre dos parceiros Treepy e converta o seu cashback em árvores
              </h3>
              <p>
                Efetuando suas compras em nossos parceiros você poderá acumular
                Treepy Cash e direciona-los para o plantio de suas árvores. (em
                desenvolvimento)
              </p>
            </BoxText>
          </Box>

          <Box>
            <div className="folha">
              <Folha />
            </div>

            <BoxText>
              <h3>Compre seus créditos Treepy Cashs direto com a gente</h3>
              <p>
                Você pode também comprar seus Treepy Cashs diretamente do nosso
                site na área do cliente, depois de calcular o valor correto
                baseado na sua emissão de CO2.
              </p>
            </BoxText>
          </Box>
        </div>

        <div className="contact">
          <h1>Seja um parceiro</h1>

          <div className="logo">
            <Logo />
          </div>

          <div>Clique aqui</div>
        </div>
      </ContentText>
    </Container>
  )
}
