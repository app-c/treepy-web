import { Box } from '@chakra-ui/react'
import Banner from '../../components/Banner'
import { Button } from '../../components/Button'
import { ButtonContact } from '../../components/ButtonContact'
import { Calc } from '../../components/Calc'
import { Folha } from '../../components/Folha'
import { Header } from '../../components/Header'
import { HowToDo } from '../../components/HowToDo'
import { ArrowL } from '../../components/Icones/arrowL'
import { ArrowR } from '../../components/Icones/arrowR'
import { OurProject } from '../../components/OurProjects'
import {
  BoxBanner,
  BoxCalc,
  BoxElement,
  BoxIco,
  BoxText,
  ContainerButton,
  Content,
} from './styles'

export function Home() {
  return (
    <Box display="flex" flexDirection="column">
      <BoxBanner>
        <Banner />
      </BoxBanner>
      <Header />

      <BoxCalc>
        <Calc />
      </BoxCalc>

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
