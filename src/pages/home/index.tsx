import { Box } from '@chakra-ui/react'
import fundo from '../../assets/img_fundo_home.jpeg'
import { Button } from '../../components/Button'
import { ButtonContact } from '../../components/ButtonContact'
import { Calc } from '../../components/Calc'
import { Folha } from '../../components/Folha'
import { Header } from '../../components/Header'
import { HowToDo } from '../../components/HowToDo'
import { ArrowL } from '../../components/Icones/arrowL'
import { ArrowR } from '../../components/Icones/arrowR'
import { OurProject } from '../../components/OurProjects'
import { BoxElement, BoxIco, BoxText, ContainerButton, Content } from './styles'

export function Home() {
  return (
    <Box display="flex" flexDirection="column">
      <Content
        style={{
          backgroundImage: `url(${fundo})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Header />

        <BoxElement>
          <BoxIco>
            <ArrowL cor="#fff" size="2rem" />
          </BoxIco>

          <BoxText className="texts">
            <p className="one">fazendo</p>
            <p className="two">do mundo</p>
            <p className="tree">um lugar melhor</p>

            <ContainerButton>
              <Button title="PARA VOCÊ" variant="B" />
              <Button title="PARA SUA EMPRESA" variant="A" />
            </ContainerButton>
          </BoxText>

          <BoxIco>
            <ArrowR cor="#fff" size="2rem" />
          </BoxIco>
        </BoxElement>
      </Content>

      <Calc />

      <div id="how">
        <HowToDo />
      </div>

      <div id="">
        <Folha />
      </div>

      <div id="projec">
        <OurProject />
      </div>

      <div id="contact">
        <ButtonContact />
      </div>
    </Box>
  )
}
