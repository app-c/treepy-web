import { useNavigate } from 'react-router-dom'
import { Button } from '../Button'
import { Container } from './styles'

export function Move() {
  const navigate = useNavigate()
  return (
    <Container>
      <h1>A única maneira de fazer isso acontecer é agir!</h1>
      <p>Comece agora a mudar o planeta em que vivemos</p>

      <div>
        <Button
          pres={() => navigate('/calc')}
          title="COMPRE AGORA"
          variant="AC"
        />
      </div>
    </Container>
  )
}
