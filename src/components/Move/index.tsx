import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button'
import * as S from './styles'
import Scroll from 'scrollreveal'

export function Move() {
  const navigate = useNavigate()

  const sr = Scroll({ reset: true })

  useEffect(() => {
    sr.reveal('.box', { duration: 1500, delay: 200, distance: '200px' })
  }, [sr])

  return (
    <S.Container>
      <S.box className="box">
        <h1>A única maneira de fazer isso acontecer é agir!</h1>
        <p>Comece agora a mudar o planeta em que vivemos.</p>

        <S.bt>
          <Button
            pres={() => navigate('/calc')}
            title="COMPRE AGORA"
            variant="AC"
          />
        </S.bt>
      </S.box>
    </S.Container>
  )
}
