import { About } from '../../components/About'
import { ButtonContact } from '../../components/ButtonContact'
import { Header } from '../../components/Header'
import { HowToDo } from '../../components/HowToDo'
import { Move } from '../../components/Move'
import { Teams } from '../../components/Teams'
import { Container } from './styles'

export function Us() {
  return (
    <div>
      <Container>
        <Header />
        <div className="text">
          <h1>SOBRE NÓS</h1>
          <p>Esse é o porque existimos</p>
        </div>
      </Container>
      <About />

      <HowToDo />

      <Teams />

      <Move />

      <ButtonContact />
    </div>
  )
}
