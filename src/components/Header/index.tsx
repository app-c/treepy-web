import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../Logo'
import {
  BoxContato,
  BoxLink,
  BoxLog,
  Buttom,
  Container,
  Li,
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
              <Li to="/">HOME</Li>
            </li>
            <li>
              <Li to="/us">SOBRE NÓS</Li>
            </li>
            <li>
              <Li to="/#how">COMO FUNCIONA</Li>
            </li>
            <li>
              <Li to="/calc">CALCULADORA</Li>
            </li>
            <li>
              <Li to="/contact">CONTATO</Li>
            </li>
            <Buttom onClick={() => nav('/signIn')}>ENTRAR</Buttom>
          </ul>
        </Nave>
      </BoxLink>
    </Container>
  )
}
