import React, { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../../../components/Banner'
import { Calc } from '../../../components/Calc'
import { Folha } from '../../../components/Folha'
import { Header } from '../../../components/Header'
import { HowToDo } from '../../../components/HowToDo'
import { OurProject } from '../../../components/OurProjects'
import { useAuth } from '../../../context/authcontext'
import { Contact } from '../contact'
import { Us } from '../Us'
import * as S from './styles'

import { Element } from 'react-scroll'

export function Home() {
  // const ref = useRef<HTMLDivElement>(null)
  const [opacity, setOpacity] = React.useState(1)

  const handleScroll = () => {
    const position = window.pageYOffset
    if (position > 200) {
      setOpacity(0.5)
    } else {
      setOpacity(1)
    }
  }

  // useEffect(() => {
  //   window.addEventListener('scroll', (h) => {
  //   })
  // }, [])

  return (
    <S.Container>
      <Header />

      <S.ScrollBar>
        <div id="top">
          <Banner />
        </div>

        <Element
          name="elementCom"
          className="element"
          onScroll={(h) => console.log(h)}
        >
          <S.elementCom>
            <S.BoxCalc>
              <Calc />
            </S.BoxCalc>
          </S.elementCom>
        </Element>

        <div id="how">
          <HowToDo />
        </div>

        <div id="">
          <Folha />
        </div>

        <div id="projec">
          <OurProject />
        </div>

        <div id="us">
          <Us />
        </div>

        <div id="contact">
          <Contact />
        </div>

        <Outlet />
      </S.ScrollBar>
    </S.Container>
  )
}
