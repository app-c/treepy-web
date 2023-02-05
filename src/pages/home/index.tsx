import React, { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../../components/Banner'
import { ButtonContact } from '../../components/ButtonContact'
import { Calc } from '../../components/Calc'
import { Folha } from '../../components/Folha'
import { Header } from '../../components/Header'
import { HowToDo } from '../../components/HowToDo'
import { OurProject } from '../../components/OurProjects'
import * as S from './styles'

export function Home() {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = React.useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(ref.current?.scrollTop || 0)
    }

    const current = ref.current
    if (!current) return

    current.addEventListener('scroll', handleScroll)

    return () => {
      current.removeEventListener('scroll', handleScroll)
    }
  }, [])

  console.log(ref.current?.scrollTop)

  return (
    <S.Container ref={ref}>
      <Header />

      <Banner />

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

      <div id="contact">
        <ButtonContact />
      </div>

      <Outlet />
    </S.Container>
  )
}
