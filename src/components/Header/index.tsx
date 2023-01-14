import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../Logo'
import {
  BoxContato,
  BoxLink,
  BoxLog,
  Buttom,
  Container,
  Menu,
  Nave,
} from './styles'

export function Header() {
  const nav = useNavigate()
  const [show, setShow] = useState(false)

  return (
    <Container>
      <BoxContato>
        <p>Fone: 99 9999999</p>
      </BoxContato>
      <BoxLink show={show} className="menu-section on">
        <BoxLog show={show} className="logo">
          <Logo size="10rem" colorL="#fff" colorF="#fff" />
        </BoxLog>

        <Menu onClick={() => setShow(!show)} className="menu-toggle">
          <div className="one"></div>
          <div className="two"></div>
          <div className="tree"></div>
        </Menu>

        <Nave className="nave">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/us">SOBRE NÓS</a>
            </li>
            <li>
              <a href="#how">COMO FUNCIONA</a>
            </li>
            <li>
              <a href="/calc">CALCULADORA</a>
            </li>
            <li>
              <a href="/contact">CONTATO</a>
            </li>
            <Buttom onClick={() => nav('/signUp')}>CADASTRE-SE</Buttom>
          </ul>
        </Nave>
      </BoxLink>
    </Container>
  )
}
