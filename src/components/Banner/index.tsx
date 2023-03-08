import React, { useCallback, useRef, useState } from 'react'
import * as S from './styles'
import fundo from '../../assets/floresta.jpeg'
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
    <S.Container pag={slides}>
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
          <S.Content
            style={{
              backgroundImage: `url(${fundo})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <S.BoxElement>
              <S.BoxText className="texts">
                <p className="one">
                  Temos uma oportunidade de reflorestamento para você ou para a
                  sua empresa
                </p>

                <S.ContainerButton>
                  <S.button variant="orange">PARA VOCE</S.button>
                  <S.button variant="green">PARA SUA EMPRESA</S.button>
                </S.ContainerButton>
              </S.BoxText>
            </S.BoxElement>
          </S.Content>
        </div>

        <div className="slide">
          <S.Content
            style={{
              backgroundImage: `url(${fundo2})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <S.BoxElement>
              <S.BoxText className="texts">
                <p className="one">
                  Somos uma inovação para o reflorestamento no Brasil
                </p>

                <S.ContainerButton>
                  <S.link to="/inovation">Saiba mais</S.link>
                </S.ContainerButton>
              </S.BoxText>
            </S.BoxElement>
          </S.Content>
        </div>

        <div className="slide">
          <S.Content
            style={{
              backgroundImage: `url(${mao})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <S.BoxElement>
              <S.BoxText className="texts">
                <p className="one">
                  As questões climáticas são uma preocupação global Saiba como
                  você pode ajudar
                </p>

                <S.ContainerButton>
                  <S.link to="/provider">Saiba mais</S.link>
                </S.ContainerButton>
              </S.BoxText>
            </S.BoxElement>
          </S.Content>
        </div>

        {/* <div className="slide">
          <S.Content
            style={{
              backgroundImage: `url(${mao})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <S.BoxElement>
              <BoxIco>
                <ArrowL cor="#fff" size="2rem" />
              </BoxIco>

              <S.BoxText className="texts">
                <p className="one">fazendo</p>
                <p className="two">do mundo</p>
                <p className="tree">um lugar melhor</p>

                <S.ContainerButton>
                    <button>PARA VOCE</button>
                  </div>
                  <div className="b2">
                    <button>PARA SUA EMPRESA</button>
                  </div>
                </S.ContainerButton>
              </S.BoxText>

              <BoxIco>
                <ArrowR cor="#fff" size="2rem" />
              </BoxIco>
            </S.BoxElement>
          </S.Content>
        </div> */}
      </div>

      {/* <div className="navigation">
        <Label pag={pag === 1} htmlFor={`slide${pag}`} />
        <Label pag={pag === 2} htmlFor={`slides${pag}`} />
        <Label pag={pag === 3} htmlFor={`slide${pag}`} />
      </div> */}
    </S.Container>
  )
}
