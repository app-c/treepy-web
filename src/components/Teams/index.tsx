import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { color } from '../../styles/colors'
import * as S from './styles'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import carlos from '../../assets/carlos.jpeg'
import tonoli from '../../assets/tonoli.jpg'
import luciana from '../../assets/luciana.jpg'
import danilo from '../../assets/danilo.jpg'
import fatima from '../../assets/fatima.jpg'
import React, { useState } from 'react'

export function Teams() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: { origin: 'center', perView: 2.5, spacing: 10 },
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
          }, 3000)
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
    <S.BoxC>
      <h3>Conheça nossa equipe</h3>
      <line className="line" />
      <S.Container ref={sliderRef} className="keen-slider">
        <S.Box className="keen-slider__slide">
          <S.Avatar src={carlos} />

          <S.Content>
            <h3>Carlos Motta</h3>
            <span>Head Financeiro e Comercial</span>
          </S.Content>
          <S.Links>
            <a href="https://www.instagram.com/motta.aai/">
              <AiFillInstagram size={40} color={color.green[20]} />
            </a>

            <a href="https://www.instagram.com/motta.aai/">
              <AiFillLinkedin size={40} color={color.green[20]} />
            </a>
          </S.Links>
        </S.Box>

        <S.Box className="keen-slider__slide">
          <S.Avatar src={danilo} />

          <S.Content>
            <h3>Danilo Simões</h3>
            <span>
              Head Jurídico e <br /> Recursos Humanos{' '}
            </span>
          </S.Content>
          <S.Links>
            <a href="https://www.instagram.com/danilo_simoes/img">
              <AiFillInstagram size={40} color={color.green[20]} />
            </a>

            <a href="https://www.instagram.com/motta.aai/">
              <AiFillLinkedin size={40} color={color.green[20]} />
            </a>
          </S.Links>
        </S.Box>

        <S.Box className="keen-slider__slide">
          <S.Avatar src={fatima} />

          <S.Content>
            <h3>Fátima Molina</h3>
            <span>Head de Inovação e Novos Negócios</span>
          </S.Content>

          <S.Links>
            <a href="https://www.instagram.com/fat.molina/">
              <AiFillInstagram size={40} color={color.green[20]} />
            </a>

            <a href="https://www.instagram.com/fatima-goncalves-molina/">
              <AiFillLinkedin size={40} color={color.green[20]} />
            </a>
          </S.Links>
        </S.Box>

        <S.Box className="keen-slider__slide">
          <S.Avatar src={luciana} />

          <S.Content>
            <h3>Luciana Escames</h3>
            <span>Head de Sustentabilidade e Meio Ambiente</span>
          </S.Content>

          <S.Links>
            <a href="https://www.instagram.com/luescames">
              <AiFillInstagram size={40} color={color.green[20]} />
            </a>

            <a href="https://www.instagram.com/luciana-e-a93b6014/">
              <AiFillLinkedin size={40} color={color.green[20]} />
            </a>
          </S.Links>
        </S.Box>

        <S.Box className="keen-slider__slide">
          <S.Avatar src={tonoli} />

          <S.Content>
            <h3>Marcos Tonoli</h3>
            <span>Head de Projetos e Operação</span>
          </S.Content>

          <S.Links>
            {/* <a href="https://www.instagram.com/luescames">
              <AiFillInstagram size={40} color={color.green[20]} />
            </a>

            <a href="https://www.instagram.com/luciana-e-a93b6014/">
              <AiFillLinkedin size={40} color={color.green[30]} />
            </a> */}
          </S.Links>
        </S.Box>
      </S.Container>
    </S.BoxC>
  )
}
