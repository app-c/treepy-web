import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { color } from '../../styles/colors'
import { Avatar, Box, BoxC, Container, Content, Links } from './styles'

import carlos from '../../assets/carlos.jpeg'
import tonoli from '../../assets/tonoli.jpg'
import luciana from '../../assets/luciana.jpg'
import danilo from '../../assets/danilo.jpg'
import fatima from '../../assets/fatima.jpg'

export function Teams() {
  return (
    <BoxC>
      <h2>Conheça nossa equipe</h2>
      <line className="line" />
      <Container>
        <Box>
          <Avatar src={carlos} />

          <Content>
            <h2>Carlos Motta</h2>
            <h4>
              Financeiro - <span>carlos.motta@treepy.com.br</span>{' '}
            </h4>
          </Content>
          <Links>
            <a href="https://www.instagram.com/motta.aai/">
              <AiFillInstagram size={40} color={color.green[20]} />
            </a>

            <a href="https://www.instagram.com/motta.aai/">
              <AiFillLinkedin size={40} color={color.green[20]} />
            </a>
          </Links>
        </Box>

        <Box>
          <Avatar src={danilo} />

          <Content>
            <h2>Danilo Simões</h2>
            <h4>
              Jurídico e RH - <span>danilo.simoes@treepy.com.br</span>{' '}
            </h4>
          </Content>
          <Links>
            <a href="https://www.instagram.com/danilo_simoes/img">
              <AiFillInstagram size={40} color={color.green[20]} />
            </a>

            <a href="https://www.instagram.com/motta.aai/">
              <AiFillLinkedin size={40} color={color.green[20]} />
            </a>
          </Links>
        </Box>

        <Box>
          <Avatar src={fatima} />

          <Content>
            <h2>Fátima Molina</h2>
            <h4>
              Inovação - <span>fatima.molina@treepy.com.br</span>{' '}
            </h4>
          </Content>

          <Links>
            <a href="https://www.instagram.com/fat.molina/">
              <AiFillInstagram size={40} color={color.green[20]} />
            </a>

            <a href="https://www.instagram.com/fatima-goncalves-molina/">
              <AiFillLinkedin size={40} color={color.green[20]} />
            </a>
          </Links>
        </Box>

        <Box>
          <Avatar src={luciana} />

          <Content>
            <h2>Luciana Escames</h2>
            <h4>
              Meio Ambiente - <span>luciana.escames@treepy.com.br</span>{' '}
            </h4>
          </Content>

          <Links>
            <a href="https://www.instagram.com/luescames">
              <AiFillInstagram size={40} color={color.green[20]} />
            </a>

            <a href="https://www.instagram.com/luciana-e-a93b6014/">
              <AiFillLinkedin size={40} color={color.green[20]} />
            </a>
          </Links>
        </Box>

        <Box>
          <Avatar src={tonoli} />

          <Content>
            <h2>Marcos Tonoli</h2>
            <h4>
              Operação - <span>marcos.tonoli@treepy.com.br</span>{' '}
            </h4>
          </Content>

          <Links>
            {/* <a href="https://www.instagram.com/luescames">
              <AiFillInstagram size={40} color={color.green[20]} />
            </a>

            <a href="https://www.instagram.com/luciana-e-a93b6014/">
              <AiFillLinkedin size={40} color={color.green[30]} />
            </a> */}
          </Links>
        </Box>
      </Container>
    </BoxC>
  )
}
