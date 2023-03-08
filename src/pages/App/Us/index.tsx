import { About2 } from '../../../components/About2'
import { Move } from '../../../components/Move'
import { Teams } from '../../../components/Teams'
import { Container } from './styles'

export function Us() {
  return (
    <div>
      <Container>
        <div className="text">
          <h1>SOBRE NÓS</h1>
          <p>porque existimos</p>
        </div>
      </Container>

      <About2 />

      <Teams />

      <Move />
    </div>
  )
}
