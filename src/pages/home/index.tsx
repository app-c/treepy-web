import { Box, Text } from '@chakra-ui/react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { FiChevronRight } from 'react-icons/fi'
import fundo from '../../assets/img_fundo_home.jpeg'
import { Button } from '../../components/Button'
import { Folha } from '../../components/Folha'
import { Header } from '../../components/Header'
import { HowToDo } from '../../components/HowToDo'
import {
  BoxCalc,
  BoxCalcText,
  BoxElement,
  BoxIco,
  BoxIcoArrow,
  BoxText,
  Calc,
  ContainerButton,
  Content
} from './styles'

export function Home() {
  return (
    <Box display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" h="2.4rem" bg="dark.100">
        <Text pl="9%" fontSize={'1.3rem'} color="#fff">
          fone
        </Text>
      </Box>

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
            <BsChevronCompactLeft fontSize={100} color="#ffff" />
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
            <BsChevronCompactRight fontSize={100} color="#ffff" />
          </BoxIco>
        </BoxElement>
      </Content>

      <Calc>
        <BoxCalcText>
          <div>
            <p className="title">Calculadora de CO2</p>
            <p>
              Calcule quantas árvores você precisará plantar {'\n'}por ano para
            </p>
            <p>compensar a emissão de CO2 </p>
          </div>
        </BoxCalcText>

        <BoxIcoArrow className="ico">
          <FiChevronRight
            style={{
              marginRight: -16,
            }}
            fontSize={50}
            color="#ffff"
          />
          <FiChevronRight
            style={{
              marginRight: -16,
            }}
            fontSize={50}
            color="#ffff"
          />
          <FiChevronRight
            style={{
              marginRight: -16,
            }}
            fontSize={50}
            color="#ffff"
          />
          <FiChevronRight
            style={{
              marginRight: -16,
            }}
            fontSize={50}
            color="#ffff"
          />
          <FiChevronRight fontSize={50} color="#ffff" />
        </BoxIcoArrow>

        <BoxCalc>
          <div>
            <Button title="CALCULAR" variant="A" />
          </div>
        </BoxCalc>
      </Calc>

      <HowToDo />

      <Folha />
    </Box>
  )
}
