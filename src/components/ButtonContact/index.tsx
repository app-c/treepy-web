import { BoxContact, BoxDescription, BoxMidia, Container } from './styles'

export function ButtonContact() {
  return (
    <Container>
      <BoxDescription>
        <h1>Treepy</h1>
        <p>
          Nascemos da ideia de gerar valor para o meio ambiente, a partir da
          oportunidade oferecida aos brasileiros de contribuírem para o
          reflorestamento pro meio da inovação.
        </p>
      </BoxDescription>

      <BoxContact>
        <h3>nossos contatos</h3>
        <p>End. Rua Norte, de frente para o sul, 580</p>
        <div>
          <p>tel</p>
          <strong>14 9999 9999 999</strong>
        </div>

        <div>
          <p>tel</p>
          <strong>14 9999 9999 999</strong>
        </div>

        <div>
          <p>tel</p>
          <strong>14 9999 9999 999</strong>
        </div>
      </BoxContact>

      <BoxMidia>
        <p>faceBook</p>
        <p>faceBook</p>
        <p>faceBook</p>
      </BoxMidia>
    </Container>
  )
}
