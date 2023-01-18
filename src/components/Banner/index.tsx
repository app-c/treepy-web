import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  BoxElement,
  BoxIco,
  BoxParallax,
  Boxtest,
  BoxText,
  Container,
  ContainerButton,
  Content,
  Label,
  Parallalayer,
  Text,
} from './styles'
import { ArrowL } from '../Icones/arrowL'
import { ArrowR } from '../Icones/arrowR'
import fundo from '../../assets/img_fundo_home.jpeg'
import fundo2 from '../../assets/fundo2.png'
import mao from '../../assets/mao.png'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Banner() {
  const [slides, setSlides] = useState('slide1')
  const [pag, setPag] = useState(1)

  const addPage = useCallback(async () => {
    if (pag < 3) {
      setPag(pag + 1)
    }
  }, [pag])

  const subPag = useCallback(async () => {
    console.log(pag, '34')
    if (pag > 1) {
      setPag(pag - 1)
    }
  }, [pag])

  useEffect(() => {
    if (pag < 4) {
      setTimeout(() => {
        addPage()
        // setPag(pag + 1)
      }, 3500)
    }

    if (pag > 2) {
      setTimeout(() => {
        setPag(1)
      }, 3500)
    }
  }, [pag])

  console.log(pag, slides)
  return (
    <Container>
      <div className="slides">
        <input type="radio" name={'slide'} id={`slide${pag}`} checked />

        {/* <div className="ico1">
          <BoxIco onClick={subPag}>
            <ArrowL cor="#fff" size="2rem" />
          </BoxIco>
        </div>

        <div className="ico2">
          <BoxIco onClick={addPage}>
            <ArrowR cor="#fff" size="2rem" />
          </BoxIco>
        </div> */}

        <div className="slide s1">
          <Content
            style={{
              backgroundImage: `url(${fundo})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <BoxElement>
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
            </BoxElement>
          </Content>
        </div>

        <div className="slide">
          <Content
            style={{
              backgroundImage: `url(${fundo2})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <BoxElement>
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
            </BoxElement>
          </Content>
        </div>

        <div className="slide">
          <Content
            style={{
              backgroundImage: `url(${mao})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <BoxElement>
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
            </BoxElement>
          </Content>
        </div>

        {/* <div className="slide">
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
        </div> */}
      </div>

      <div className="navigation">
        <Label pag={pag === 1} htmlFor={`slide${pag}`} />
        <Label pag={pag === 2} htmlFor={`slides${pag}`} />
        <Label pag={pag === 3} htmlFor={`slide${pag}`} />
      </div>
    </Container>
  )
}