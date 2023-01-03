import { useState } from 'react'
import { Logo } from '../Logo'
import { BoxLink, BoxLog, Buttom, Container, Menu, Nave } from './styles'

export function Header() {
  const [show, setShow] = useState(false)
  return (
    <Container>
      <BoxLog className="logo">
        <Logo size="7vw" colorL="#fff" />
      </BoxLog>

      <BoxLink show={show} className="menu-section on">
        <Menu onClick={() => setShow(!show)} className="menu-toggle">
          <div className="one"></div>
          <div className="two"></div>
          <div className="tree"></div>
        </Menu>

        <Nave className="nave">
          <ul>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#us">SOBRE NÓS</a>
            </li>
            <li>
              <a href="#how">COMO FUNCIONA</a>
            </li>
            <li>
              <a href="#calc">CALCULADORA</a>
            </li>
            <li>
              <a href="#contact">CONTATO</a>
            </li>
            <Buttom>CADASTRE-SE</Buttom>
          </ul>
        </Nave>
      </BoxLink>
    </Container>
  )
}
