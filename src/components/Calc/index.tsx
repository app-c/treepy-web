import { Container, ContentButton, ContentText, Ico } from './styles'
import { Button } from '../Button'
import { Link } from 'react-router-dom'

const icon = [1, 2, 3, 4, 5]

export function Calc() {
  return (
    <Container>
      <ContentText>
        <div>
          <h2>Calculadora de CO2</h2>
          <p>
            Calcule quantas árvores voê presisará plantar por ano para compensar
            a emissão de CO2
          </p>
        </div>
      </ContentText>

      <ContentButton>
        <div className="icon">
          {icon.map((h) => (
            <div key={h}>
              <Ico />
            </div>
          ))}
        </div>

        <div className="buttom">
          <Link className="linboton" to={'/calc'}>
            Calcule agora
          </Link>
        </div>
      </ContentButton>
    </Container>
  )
}
