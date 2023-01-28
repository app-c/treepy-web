import inova from '../../assets/inova.png'
import world from '../../assets/mundo_mao.jpg'
import { Button } from '../Button'
import { BoxTexts, Container, Content, Image, Inova, Texts } from './styles'

interface Props {
  type: 'a' | 'b'
}
export function About({ type = 'a' }: Props) {
  return (
    <Container>
      {type === 'a' && (
        <Content>
          <div className="image">
            <Image src={world} alt="mundo" />
          </div>

          <BoxTexts>
            <h1>A Treepy</h1>
            <Texts>
              Somos o 1º programa de créditos focado na geração de valor para o
              meio ambiente. Através de compras em estabelecimentos é possível
              acumular créditos e contribuir para o reflorestamento de locais no
              Brasil inteiro. Locais/estabelecimentos credenciados para gerar
              créditos no programa Treepy.
            </Texts>
            <Texts>
              Os valores das notas fiscais cadastradas na nossa plataforma serão
              convertidos no programa de créditos e destinados à projetos de
              reflorestamento.
            </Texts>
            <Texts>
              Além de contribuir para o reflorestamento e meio ambiente,
              trabalhamos para promover um futuro melhor para as próximas
              gerações, aplicando inovação e tecnologia para redução de emissões
              de CO2, gerando valor de investimento num processo que é visto
              como custo.
            </Texts>

            <div className="interact">
              <div className="buton">
                <Button title="LEIA MAIS" variant="AC" />
              </div>

              <Inova src={inova} />
            </div>
          </BoxTexts>
        </Content>
      )}

      {type === 'b' && (
        <Content>
          <div className="image">
            <Image src={world} alt="mundo" />
          </div>

          <BoxTexts>
            <h1>COMECE A MUDAR ESSA REALIDADE AGORA!</h1>
            <div>
              <p>
                Estamos enfrentando uma crise climática. Nenhum desafio
                representa uma ameaça maior para as gerações futuras do que as
                mudanças climáticas. O clima estremo, o derretimento ddas
                geleiras e o aumento do nível do mar estão ligados às mudanças
                climáticas. Se continuarmos nessa trajetória, o futuro da
                natureza, junto com o nosso, estará em perigo.
              </p>
              <p>
                Sem ação climática, a humanidade, a vida selvagem e o planeta
                que conhecemos e amamos sofrerão. Muitas espécies estarão sob
                maior ameaça quando não conseguirem se adaptar ao aumento do
                nível do mar, mudanças nos padrões de chuva, aquecimento das
                temperaturas, um oceano acidificado e aquecido e outras
                consequências do aumento da poluição por carbono.
              </p>
              <p>
                Não podemos ficar para trás e deixar isso acontecer. Precisamos
                começar hoje mesmo a mudar a maneira como escolhemos e usamos
                energia e recursos. Através do reflorestamento sabemos que essa
                realidade pode mudar. Reduzir ou zerar a poluição por carbono
                para reduzir os impactos das mudanças climáticas e inspirar
                outros países a fazer o mesmo
              </p>
            </div>

            <div className="interact">
              <div className="buton">
                <Button title="LEIA MAIS" variant="AC" />
              </div>

              <Inova src={inova} />
            </div>
          </BoxTexts>
        </Content>
      )}
    </Container>
  )
}
