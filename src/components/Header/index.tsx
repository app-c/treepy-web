import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import * as S from './styles'
import { color as cl } from '../../styles/colors'

interface Props {
  color?: string
}

export function Header({ color = 'rgba(34, 71, 26, 0.5)' }: Props) {
  const [show, setShow] = useState(false)

  return (
    <>
      <S.Container color={color}>
        <S.BoxLink show={show}>
          <S.BoxLog href="#top" show={show} className="logo">
            <Logo colorL="#fff" colorF="#fff" />
          </S.BoxLog>
          <S.Menu show={show} onClick={() => setShow(!show)}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="tree"></div>
          </S.Menu>

          <S.Nave show={show}>
            <S.Li show={show} href="#how">
              COMO FUNCIONA
            </S.Li>
            <S.Li show={show} href="#us">
              SOBRE NÓS
            </S.Li>

            <Link to="/calc">CALCULADORA</Link>

            <S.Li show={show} href="#contact">
              CONTATO
            </S.Li>

            <S.bt>
              <Link
                style={{
                  color: cl.orange[10],
                  width: '100%',
                  height: '100%',
                  textDecoration: 'none',
                }}
                to="/signIn"
              >
                Já tem uma conta?
              </Link>
            </S.bt>
          </S.Nave>
        </S.BoxLink>
      </S.Container>
    </>
  )
}
