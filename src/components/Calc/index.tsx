import * as S from './styles'
import { Button } from '../Button'
import { Link } from 'react-router-dom'

const icon = [1, 2, 3, 4, 5]

export function Calc() {
  return (
    <S.box>
      <S.Container>
        <S.ContentText>
          <div>
            <h2>Calculadora de CO2</h2>
            <p>
              Calcule quantas árvores você presisará plantar por ano para
              compensar a emissão de CO₂
            </p>
          </div>
        </S.ContentText>

        <S.ContentButton>
          <div className="icon">
            {icon.map((h) => (
              <div key={h}>
                <S.Ico />
              </div>
            ))}
          </div>

          <div className="buttom">
            <Link className="linboton" to={'/calc'}>
              Calcule agora
            </Link>
          </div>
        </S.ContentButton>
      </S.Container>
    </S.box>
  )
}
