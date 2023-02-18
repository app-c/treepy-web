import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import {
  BoxContato,
  BoxLink,
  BoxLog,
  Container,
  Li,
  Menu,
  Nave,
} from './styles'

interface Props {
  color?: string
}

export function Header({ color = 'rgba(34, 71, 26, 0.5)' }: Props) {
  const [show, setShow] = useState(false)

  return (
    <>
      <Container color={color}>
        <BoxContato>
          <a href="mailto:atendimento@treepy.com.br">
            atendimento@treepy.com.br
          </a>
        </BoxContato>

        <BoxLink show={show}>
          <BoxLog href="#top" show={show} className="logo">
            <Logo colorL="#fff" colorF="#fff" />
          </BoxLog>
          <Menu show={show} onClick={() => setShow(!show)}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="tree"></div>
          </Menu>

          <Nave show={show}>
            {/* <Li show={show} to="/">
              HOME
            </Li> */}
            <Li show={show} href="#us">
              SOBRE NÓS
            </Li>
            <Li show={show} href="#how">
              COMO FUNCIONA
            </Li>
            <Link to="/calc">CALCULADORA</Link>
            <Li show={show} href="#contact">
              CONTATO
            </Li>

            <div className="buton">
              <div>
                <Link className="link" to="/signIn">
                  ÁREA DO CLIENTE
                </Link>
              </div>
            </div>
          </Nave>
        </BoxLink>
      </Container>
    </>
  )
}
