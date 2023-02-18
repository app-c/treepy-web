import {
  Box,
  BoxFolha,
  BoxGridFolha,
  ContainerFolha,
  ContentFolha,
  ContentTextFolha,
} from './styles'

import gota from '../../assets/gota.svg'
import { FolhaAnimeted } from '../FolhaAnimeted'
import { color } from '../../styles/colors'

export function Folha() {
  return (
    <Box>
      <BoxFolha>
        <ContentTextFolha>
          <div>
            <p className="title">Mindset</p>
          </div>
          <line className="line" />
        </ContentTextFolha>

        <BoxGridFolha>
          <FolhaAnimeted
            title="Promação de um futuro melhor às próximas gerações"
            text="Pensar no planeta é zelar por um futuro melhor"
            cor={color.green[20]}
          />

          <FolhaAnimeted
            title="Tecnologia em prol do meio ambiente"
            text=" A tecnologia sendo usada para reduzir os impactos negativos no
            planeta"
            cor={color.orange[20]}
          />

          <FolhaAnimeted
            title="Promação de um futuro melhor às próximas gerações"
            text="Primeiro Programa de Créditos focado na geração de valor para o
            meio ambiente"
            cor={color.green[40]}
          />

          <FolhaAnimeted
            title="Compensação de danos causados"
            text="Oportunidade de compensar os danos causados ao meio ambiente"
            cor={color.green[30]}
          />
        </BoxGridFolha>
      </BoxFolha>
    </Box>
  )
}
