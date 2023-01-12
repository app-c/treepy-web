import React, { useEffect, useRef, useState } from 'react'
import {
  BoxElement,
  BoxIco,
  BoxParallax,
  Boxtest,
  BoxText,
  Container,
  ContainerButton,
  Content,
  Parallalayer,
  Text,
} from './styles'
import { ArrowL } from '../Icones/arrowL'
import { ArrowR } from '../Icones/arrowR'
import fundo from '../../assets/img_fundo_home.jpeg'
import fundo2 from '../../assets/fundo2.png'
import mao from '../../assets/mao.png'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'

interface PageProps {
  offset: number
  gradient: string
  onClick: () => void
}

// <ParallaxLayer offset={offset} speed={0.1}>
//
// </ParallaxLayer>

export default function Banner() {
  const courselRef = useRef(null)
  const parallax = useRef<IParallax>(null)

  const [pag, setPag] = useState(0)

  console.log(courselRef.current)

  useEffect(() => {
    if (pag < 4) {
      setTimeout(() => {
        setPag(pag + 1)
        parallax.current!.scrollTo(pag)
      }, 4500)
    }

    if (pag > 3) {
      setPag(0)
    }

    console.log(pag)
  }, [pag])

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }

  return (
    <div style={{ background: '#dfdfdf' }}>
      <Parallax
        style={{ overflow: 'hidden' }}
        ref={parallax}
        pages={3}
        horizontal
      >
        <Parallalayer offset={0} speed={0.6} onClick={() => scroll(1)}>
          <Content
            style={{
              backgroundImage: `url(${mao})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <BoxElement>
              <BoxIco>
                <ArrowL cor="#fff" size="2rem" />
              </BoxIco>

              <BoxText className="texts">
                <p className="one">fazendo</p>
                <p className="two">do mundo</p>
                <p className="tree">um lugar melhor</p>

                <ContainerButton>
                  <div className="b1">
                    <button>PARA VOCE</button>
                  </div>
                  <div className="b2">
                    <button>PARA SUA EMPRESA</button>
                  </div>
                </ContainerButton>
              </BoxText>

              <BoxIco>
                <ArrowR cor="#fff" size="2rem" />
              </BoxIco>
            </BoxElement>
          </Content>
        </Parallalayer>

        <Parallalayer offset={1} speed={1} onClick={() => scroll(2)}>
          <Content
            style={{
              backgroundImage: `url(${fundo})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <BoxElement>
              <BoxIco>
                <ArrowL cor="#fff" size="2rem" />
              </BoxIco>

              <BoxText className="texts">
                <p className="one">fazendo</p>
                <p className="two">do mundo</p>
                <p className="tree">um lugar melhor</p>

                <ContainerButton>
                  <div className="b1">
                    <button>PARA VOCE</button>
                  </div>
                  <div className="b2">
                    <button>PARA SUA EMPRESA</button>
                  </div>
                </ContainerButton>
              </BoxText>

              <BoxIco>
                <ArrowR cor="#fff" size="2rem" />
              </BoxIco>
            </BoxElement>
          </Content>
        </Parallalayer>

        <Parallalayer offset={2} speed={0.6} onClick={() => scroll(0)}>
          <Content
            style={{
              backgroundImage: `url(${fundo2})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <BoxElement>
              <BoxIco>
                <ArrowL cor="#fff" size="2rem" />
              </BoxIco>

              <BoxText className="texts">
                <p className="one">fazendo</p>
                <p className="two">do mundo</p>
                <p className="tree">um lugar melhor</p>

                <ContainerButton>
                  <div className="b1">
                    <button>PARA VOCE</button>
                  </div>
                  <div className="b2">
                    <button>PARA SUA EMPRESA</button>
                  </div>
                </ContainerButton>
              </BoxText>

              <BoxIco>
                <ArrowR cor="#fff" size="2rem" />
              </BoxIco>
            </BoxElement>
          </Content>
        </Parallalayer>
      </Parallax>
    </div>
  )
}
