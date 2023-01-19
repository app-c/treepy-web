import { Box } from '@chakra-ui/react'
import { useRef } from 'react'
import Banner from '../../components/Banner'
import { ButtonContact } from '../../components/ButtonContact'
import { Calc } from '../../components/Calc'
import { Folha } from '../../components/Folha'
import { Header } from '../../components/Header'
import { HowToDo } from '../../components/HowToDo'
import { OurProject } from '../../components/OurProjects'
import { BoxBanner, BoxCalc } from './styles'

export function Home() {
  const refScrol = useRef(null)

  console.log(refScrol.current)
  return (
    <Box ref={refScrol} display="flex" flexDirection="column">
      <Header />

      <Banner />

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
