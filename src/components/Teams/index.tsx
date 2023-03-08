import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { color } from '../../styles/colors'
import * as S from './styles'

import carlos from '../../assets/carlos.jpeg'
import tonoli from '../../assets/tonoli.jpg'
import luciana from '../../assets/luciana.jpg'
import danilo from '../../assets/danilo.jpg'
import fatima from '../../assets/fatima.jpg'

export function Teams() {
  return (
    <S.BoxC>
      <h3>Conheça nossa equipe</h3>
      <line className="line" />
      <S.Container>
        <S.Box>
          <S.Avatar src={carlos} />

          <S.Content>
            <h3>Carlos Motta</h3>
            <h4>
              Financeiro <span>carlos.motta@treepy.com.br</span>{' '}
            </h4>
          </S.Content>
          <S.Links>
            <a href="https://www.instagram.com/motta.aai/">
              <AiFillInstagram size={40} color={color.green[20]} />
            </a>

            <a href="https://www.instagram.com/motta.aai/">
              <AiFillLinkedin size={40} color={color.green[20]} />
            </a>
          </S.Links>
        </S.Box>

        <S.Box>
          <S.Avatar src={danilo} />

          <S.Content>
            <h3>Danilo Simões</h3>
            <h4>
              Jurídico e RH - <span>danilo.simoes@treepy.com.br</span>{' '}
            </h4>
          </S.Content>
          <S.Links>
            <a href="https://www.instagram.com/danilo_simoes/img">
              <AiFillInstagram size={40} color={color.green[20]} />
            </a>

            <a href="https://www.instagram.com/motta.aai/">
              <AiFillLinkedin size={40} color={color.green[20]} />
            </a>
          </S.Links>
        </S.Box>

        <S.Box>
          <S.Avatar src={fatima} />

          <S.Content>
            <h3>Fátima Molina</h3>
            <h4>
              Inovação - <span>fatima.molina@treepy.com.br</span>{' '}
            </h4>
          </S.Content>

          <S.Links>
            <a href="https://www.instagram.com/fat.molina/">
              <AiFillInstagram size={40} color={color.green[20]} />
            </a>

            <a href="https://www.instagram.com/fatima-goncalves-molina/">
              <AiFillLinkedin size={40} color={color.green[20]} />
            </a>
          </S.Links>
        </S.Box>

        <S.Box>
          <S.Avatar src={luciana} />

          <S.Content>
            <h3>Luciana Escames</h3>
            <h4>
              Meio Ambiente - <span>luciana.escames@treepy.com.br</span>{' '}
            </h4>
          </S.Content>

          <S.Links>
            <a href="https://www.instagram.com/luescames">
              <AiFillInstagram size={40} color={color.green[20]} />
            </a>

            <a href="https://www.instagram.com/luciana-e-a93b6014/">
              <AiFillLinkedin size={40} color={color.green[20]} />
            </a>
          </S.Links>
        </S.Box>

        <S.Box>
          <S.Avatar src={tonoli} />

          <S.Content>
            <h3>Marcos Tonoli</h3>
            <h4>
              Operação - <span>marcos.tonoli@treepy.com.br</span>{' '}
            </h4>
          </S.Content>

          <S.Links>
            {/* <a href="https://www.instagram.com/luescames">
              <AiFillInstagram size={40} color={color.green[20]} />
            </a>

            <a href="https://www.instagram.com/luciana-e-a93b6014/">
              <AiFillLinkedin size={40} color={color.green[30]} />
            </a> */}
          </S.Links>
        </S.Box>
      </S.Container>
    </S.BoxC>
  )
}
