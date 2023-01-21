import { BoxContact, BoxDescription, BoxMidia, Container } from './styles'
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { color } from '../../styles/colors'

export function ButtonContact() {
  return (
    <Container>
      <BoxDescription>
        <h1>Treepy</h1>
        <p>
          Vista Nascemos da ideia de gerar valor para o meio ambiente, a partir
          da oportunidade oferecida aos brasileiros de contribuírem para o
          reflorestamento pro meio da inovação.
        </p>
      </BoxDescription>

      <BoxContact>
        <h3 style={{ marginBottom: 10 }}>Nossos contatos</h3>
        <p>
          Av. Paulissta, 1.842 - Torre Norte - Conjunto 178 - 17° Andar - Bela{' '}
        </p>
        <p>CEP 01310-945</p>
        <p style={{ color: color.orange[10] }}>contato@treepy.com.br</p>
      </BoxContact>

      <BoxMidia>
        <a href="https://www.instagram.com/treepy.reflorestamento/">
          {' '}
          <AiFillInstagram size={50} color={color.orange[20]} />
          Instagram
        </a>

        <a href="https://www.linkedin.com/company/treepy/">
          {' '}
          <AiFillLinkedin size={50} color={color.orange[20]} />
          LinkedIn
        </a>

        <a href="https://www.youtube.com/@treepy9814">
          {' '}
          <AiFillYoutube size={50} color={color.orange[20]} />
          YouTube
        </a>
      </BoxMidia>
    </Container>
  )
}
