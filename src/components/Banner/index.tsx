import React, { useCallback, useRef, useState } from 'react'
import {
  BoxElement,
  BoxText,
  Container,
  ContainerButton,
  Content,
  Label,
  Text,
} from './styles'
import fundo from '../../assets/floresta.jpg'
import fundo2 from '../../assets/moça.jpg'
import mao from '../../assets/mao.jpg'

export default function Banner() {
  const [slides, setSlides] = useState('')
  const eleRef = useRef(null)
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

  // useEffect(() => {
  //   if (pag < 4) {
  //     setTimeout(() => {
  //       addPage()
  //       // setPag(pag + 1)
  //     }, 3500)
  //   }

  //   if (pag > 2) {
  //     setTimeout(() => {
  //       setPag(1)
  //     }, 3500)
  //   }
  // }, [pag])

  React.useEffect(() => {}, [])

  const add = React.useCallback(() => {
    const sd = pag + 33.5
    setSlides(`-${sd}%`)
  }, [pag])

  return (
    <Container pag={slides}>
      <div className="slides">
        <input type="radio" name={'slide'} id={`slide${pag}`} checked />

        {/* <div className="ico1">
          <BoxIco onClick={subPag}>
            <ArrowL cor="#fff" size="2rem" />
          </BoxIco>
        </div> */}
        {/* 
        <div className="ico2">
          <BoxIco onClick={add}>
            <ArrowR cor="#fff" size="2rem" />
          </BoxIco>
        </div> */}

        <div ref={eleRef} className="slide s1">
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

      {/* <div className="navigation">
        <Label pag={pag === 1} htmlFor={`slide${pag}`} />
        <Label pag={pag === 2} htmlFor={`slides${pag}`} />
        <Label pag={pag === 3} htmlFor={`slide${pag}`} />
      </div> */}
    </Container>
  )
}
