import { Link } from 'react-router-dom'
import { color } from '../../styles/colors'
import { Logo } from '../Logo'
import * as S from './styles'

export function HeaderC() {
  return (
    <S.Container>
      <S.logoBox>
        <a href="/">
          <Logo colorL={color.orange[10]} />
        </a>
      </S.logoBox>
    </S.Container>
  )
}
