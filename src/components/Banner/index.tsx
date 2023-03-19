import React, { useCallback, useRef, useState } from 'react'
import * as S from './styles'
import fundo from '../../assets/floresta.jpeg'
import fundo2 from '../../assets/moça.jpg'
import mao from '../../assets/mao.jpg'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export default function Banner() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
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
      <S.slider ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">1</div>
        <div className="keen-slider__slide">2</div>
        <div className="keen-slider__slide">3</div>
      </S.slider>
    </S.Container>
  )
}
