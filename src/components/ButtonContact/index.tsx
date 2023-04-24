import * as S from './styles'
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { color } from '../../styles/colors'

export function ButtonContact() {
  return (
    <S.Container>
      <S.content>
        <S.title>Treepy</S.title>
        <S.subTitle>
          Nascemos da ideia onde todos podem gerar valor para o meio ambiente a
          partir de uma plataforma inovadora.
        </S.subTitle>
      </S.content>

      <S.content>
        <S.title>Nossos contatos</S.title>
        <S.subTitle>Av. Paulista, 1.842 - Torre Norte -</S.subTitle>

        <S.subTitle>Conjunto 178 - 17° Andar -</S.subTitle>

        <S.subTitle>Bela Vista - São Paulo - SP</S.subTitle>
        <S.subTitle>CEP 01310-945</S.subTitle>
        <S.subTitle style={{ color: color.orange[10] }}>
          contato@treepy.com.br
        </S.subTitle>
      </S.content>

      <S.BoxMidia>
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
      </S.BoxMidia>
    </S.Container>
  )
}
