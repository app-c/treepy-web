import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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

export function Header() {
  const nav = useNavigate()
  const [show, setShow] = useState(false)

  return (
    <>
      <Container>
        {/* <BoxContato>
          <p>Fone: 99 9999999</p>
        </BoxContato>
        <BoxLink show={show} className="menu-section on">
          <BoxLog show={show} className="logo">
            <Logo size="10rem" colorL="#fff" colorF="#fff" />
          </BoxLog>

          <Menu
            show={show}
            onClick={() => setShow(!show)}
            className="menu-toggle"
          >
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
              <Buttom show={show} onClick={() => nav('/signIn')}>
                ÁREA DO CLIENTE
              </Buttom>
            </ul>
          </Nave>
        </BoxLink> */}
        <BoxContato>
          <p>contato</p>
        </BoxContato>

        <BoxLink show={show}>
          <Menu show={show} onClick={() => setShow(!show)}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="tree"></div>
          </Menu>
          <BoxLog show={show} className="logo">
            <Logo colorL="#fff" colorF="#fff" />
          </BoxLog>

          <Nave show={show}>
            <Li show={show} to="/">
              HOME
            </Li>
            <Li show={show} to="/us">
              SOBRE NÓS
            </Li>
            <Li show={show} to="/#how">
              COMO FUNCIONA
            </Li>
            <Li show={show} to="/calc">
              CALCULADORA
            </Li>
            <Li show={show} to="/contact">
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
