import { color } from '../../../styles/colors'
import * as S from './styles'
import { FaUserAlt, MdHomeWork, FiCheckCircle } from 'react-icons/all'

interface props {
  currentStep: number
}

export function StepsIcons({ currentStep = 0 }: props) {
  return (
    <S.container>
      <S.boxRow>
        <S.box>
          <FaUserAlt
            size={35}
            color={currentStep >= 0 ? color.green[10] : '#858585'}
          />
          <S.title>Dados pessoais</S.title>
        </S.box>

        <S.box>
          <MdHomeWork
            size={35}
            color={currentStep > 0 ? color.green[10] : '#858585'}
          />
          <S.title>Endereço</S.title>
        </S.box>

        <S.box>
          <FiCheckCircle
            size={35}
            color={currentStep > 1 ? color.green[10] : '#858585'}
          />
          <S.title>Finalizar</S.title>
        </S.box>
      </S.boxRow>
    </S.container>
  )
}
