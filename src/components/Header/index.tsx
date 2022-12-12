import { useState } from 'react'
import { BoxLink, BoxLog, Buttom, Container, Menu, Nave } from './styles'

export function Header() {
  const [show, setShow] = useState(false)
  return (
    <Container>
      <BoxLog className="logo">
        <h1>logo</h1>
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
              <a href="#home">SOBRE NÓS</a>
            </li>
            <li>
              <a href="#home">COMO FUNCIONA</a>
            </li>
            <li>
              <a href="#home">CALCULADORA</a>
            </li>
            <li>
              <a href="#home">BLOG</a>
            </li>

            <li>
              <a href="#home">CONTATO</a>
            </li>
            <Buttom>CADASTRE-SE</Buttom>
          </ul>
        </Nave>
      </BoxLink>
    </Container>
  )
}
