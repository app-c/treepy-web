import { flexbox } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { color } from '../../styles/colors'
import { Logo } from '../Logo'
import * as S from './styles'

interface Type {
  type: '1' | '2' | '3'
  title?: string
}

export function HeaderC({ type = '1', title }: Type) {
  return (
    <S.Container>
      {type === '1' && (
        <S.box>
          <S.logoBox>
            <a href="/">
              <Logo colorF="#fff" colorL={'#fff'} />
            </a>
          </S.logoBox>

          <h4>{title}</h4>

          <S.boxAccount>
            <S.buttonAccount to="/signIn">Área do cliente</S.buttonAccount>
          </S.boxAccount>
        </S.box>
      )}

      {type === '2' && (
        <S.box>
          <S.logoBox>
            <a href="/">
              <Logo colorL={color.orange[20]} />
            </a>
          </S.logoBox>
        </S.box>
      )}

      {type === '3' && (
        <S.box>
          <S.logoBox>
            <a href="/">
              <Logo colorL={color.green[30]} colorF={color.green[30]} />
            </a>
          </S.logoBox>

          <h4>{title}</h4>

          <S.boxAccount>
            <S.buttonAccount to="/signIn">Área do cliente</S.buttonAccount>
          </S.boxAccount>
        </S.box>
      )}
    </S.Container>
  )
}
