import React, { useCallback, useRef, useState } from 'react'
import * as S from './styles'
import fundo from '../../assets/floresta.jpeg'
import fundo2 from '../../assets/moça.jpg'
import mao from '../../assets/mao.jpg'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Arrow } from '../Arrow'
import { Link } from 'react-router-dom'

export default function Banner() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          setCurrentSlide(slider.track.details.rel)
          clearTimeout(timeout)
        }

        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 4000)
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            setLoaded(true)
            clearNextTimeout()
          })

          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })

          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ],
  )

  return (
    <S.Container>
      <S.arrow>
        <Arrow
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
          disabled={currentSlide === 0}
          left
        />
      </S.arrow>

      <S.arrow style={{ left: '90vw' }}>
        <Arrow
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
        />
      </S.arrow>
      <S.slider ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
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
                  <S.button variant="orange">
                    <Link
                      to="/toyou"
                      style={{ textDecoration: 'none', color: '#fff' }}
                    >
                      PARA VOCÊ
                    </Link>
                  </S.button>

                  <S.button style={{ marginLeft: 15 }} variant="green">
                    <Link
                      to="/toprestador"
                      style={{ textDecoration: 'none', color: '#fff' }}
                    >
                      PARA SUA EMPRESA
                    </Link>
                  </S.button>
                </S.ContainerButton>
              </S.BoxText>
            </S.BoxElement>
          </S.Content>
        </div>

        <div className="keen-slider__slide ">
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

        <div className="keen-slider__slide">
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
      </S.slider>

      {loaded && instanceRef.current && (
        <S.dot className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            )
          })}
        </S.dot>
      )}
    </S.Container>
  )
}
