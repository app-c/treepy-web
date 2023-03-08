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

export function Home() {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = React.useState(0)

  useEffect(() => {
    window.addEventListener('scroll', (h) => {})
  }, [])

  return (
    <S.Container ref={ref}>
      <Header />

      <S.ScrollBar>
        <div id="top">
          <Banner />
        </div>

        <S.BoxCalc>
          <Calc />
        </S.BoxCalc>

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
