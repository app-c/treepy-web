import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { color } from '../../styles/colors'
import { Avatar, Box, BoxC, Container, Content, Links } from './styles'

export function Teams() {
  return (
    <BoxC>
      <h2>Conheça nosso time</h2>
      <line className="line" />
      <Container>
        <Box>
          <Avatar>gelo</Avatar>

          <Content>
            <h2>Carlos Motta</h2>
            <h4>
              Financeiro - <span>carlos.motta@treepy.com.br</span>{' '}
            </h4>
            <p>
              Engenheiro com MBA em Gestão Empresarial na FIA e Gestaão de
              Projetos na University of La Verne (Califórnia), com 20 anos de
              experiência em diversas áreas da engenharia, projetos e
              financeiro.
            </p>
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
          <Avatar>gelo</Avatar>

          <Content>
            <h2>Danilo Simões</h2>
            <h4>
              Jurídico e RH - <span>danilo.simoes@treepy.com.br</span>{' '}
            </h4>
            <p>
              Advogado com MBA em Gestão Empresarial e Pós Graduado em Direito
              Processual Civil pela Fundação Getúlio Vargas com mais de 16 anos
              de experiência em jurídicos nas áreas Contenciosa, M&A, Ambiental,
              Criminal, Imobiliário, Tributário e Consultivo
            </p>
          </Content>
          <Links>
            <a href="https://www.instagram.com/danilo_simoes/img">
              <AiFillInstagram size={40} color={color.green[20]} />
            </a>

            <a href="https://www.instagram.com/motta.aai/">
              <AiFillLinkedin size={40} color={color.green[30]} />
            </a>
          </Links>
        </Box>

        <Box>
          <Avatar>gelo</Avatar>

          <Content>
            <h2>Fátima Molina</h2>
            <h4>
              Inovação - <span>fatima.molina@treepy.com.br</span>{' '}
            </h4>
            <p>
              Administradora de Empresas com capacitação em Gerenciamento de
              Projetos pela Vanzolini e MBA em Gestão Estratégica Empresarial
              pela FIA com 20 anos de experiência no setor de energia nas áreas
              Comercial, Planejamento Estratégico, Qualidade, P&D e Inovação.
            </p>
          </Content>

          <Links>
            <a href="https://www.instagram.com/danilo_simoes/img">
              <AiFillInstagram size={40} color={color.green[20]} />
            </a>

            <a href="https://www.instagram.com/motta.aai/">
              <AiFillLinkedin size={40} color={color.green[30]} />
            </a>
          </Links>
        </Box>

        <Box>
          <Avatar>gelo</Avatar>

          <Content>
            <h2>Fátima Molina</h2>
            <h4>
              Inovação - <span>fatima.molina@treepy.com.br</span>{' '}
            </h4>
            <p>
              Administradora de Empresas com capacitação em Gerenciamento de
              Projetos pela Vanzolini e MBA em Gestão Estratégica Empresarial
              pela FIA com 20 anos de experiência no setor de energia nas áreas
              Comercial, Planejamento Estratégico, Qualidade, P&D e Inovação.
            </p>
          </Content>

          <Links>
            <a href="https://www.instagram.com/fat.molina/">
              <AiFillInstagram size={40} color={color.green[20]} />
            </a>

            <a href="https://www.instagram.com/fatima-goncalves-molina/">
              <AiFillLinkedin size={40} color={color.green[30]} />
            </a>
          </Links>
        </Box>

        <Box>
          <Avatar>gelo</Avatar>

          <Content>
            <h2>Luciana Escames</h2>
            <h4>
              Meio Ambiente - <span>luciana.escames@treepy.com.br</span>{' '}
            </h4>
            <p>
              Geógrafa com especialização em Gestão Integrada de Meio Ambiente,
              Segurança e Saúde no Trabalho pelo SENAC com 17 anos de
              experiência em Gestão Ambiental e Licenciamento
            </p>
          </Content>

          <Links>
            <a href="https://www.instagram.com/luescames">
              <AiFillInstagram size={40} color={color.green[20]} />
            </a>

            <a href="https://www.instagram.com/luciana-e-a93b6014/">
              <AiFillLinkedin size={40} color={color.green[30]} />
            </a>
          </Links>
        </Box>

        <Box>
          <Avatar>gelo</Avatar>

          <Content>
            <h2>Marcos Tonoli</h2>
            <h4>
              Operação - <span>marcos.tonoli@treepy.com.br</span>{' '}
            </h4>
            <p>
              Engenheiro com MBA em Administração pelo Instituto Mauá de
              Tecnologia com 35 anos de experiência no setor de elétrico nas
              áreas de Gerenciamento de Manutenção de Subestações, Linhas de
              Transmissão Aéreas e Subterrâneas de Alta Tensão e Planejamento do
              Sistema Elétrico
            </p>
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
