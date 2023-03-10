/* eslint-disable no-undef */
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
import Scroll from 'scrollreveal'

export function Home() {
  // const ref = useRef<HTMLDivElement>(null)
  const [opacity, setOpacity] = React.useState(1)

  const sr = Scroll({ reset: true })

  useEffect(() => {
    sr.reveal('.calc', { duration: 2000, delay: 100, distance: '200px' })
    sr.reveal('.folha', { duration: 1500, delay: 200, distance: '200px' })
    sr.reveal('.how', { duration: 2000, delay: 100, distance: '200px' })
    sr.reveal('.projet', { duration: 2000, delay: 100, distance: '200px' })
  }, [sr])

  return (
    <S.Container>
      <Header />

      <S.ScrollBar>
        <div id="top">
          <Banner />
        </div>

        <S.BoxCalc className="calc">
          <Calc />
        </S.BoxCalc>

        <div id="how">
          <HowToDo />
        </div>

        <div className="folha" id="">
          <Folha />
        </div>

        <div className="projet" id="projec">
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
