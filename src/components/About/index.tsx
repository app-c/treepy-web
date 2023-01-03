import { BoxTexts, BoxWorld, Container, Image, Inova } from './styles'
import world from '../../assets/mundo.png'
import inova from '../../assets/inova.png'
import { Button } from '../Button'

export function About() {
  return (
    <Container>
      <Image src={world} alt="mundo" />

      <BoxTexts>
        <h1>A Treepy</h1>
        <div>
          <p>
            Somos o 1º programa de créditos focado na geração de valor para o
            meio ambiente. Através de compras em estabelecimentos é possível
            acumular créditos e contribuir para o reflorestamento de locais no
            Brasil inteiro. Locais/estabelecimentos credenciados para gerar
            créditos no programa Treepy.
          </p>
          <p>
            Os valores das notas fiscais cadastradas na nossa plataforma serão
            convertidos no programa de créditos e destinados à projetos de
            reflorestamento.
          </p>
          <p>
            Além de contribuir para o reflorestamento e meio ambiente,
            trabalhamos para promover um futuro melhor para as próximas
            gerações, aplicando inovação e tecnologia para redução de emissões
            de CO2, gerando valor de investimento num processo que é visto como
            custo.
          </p>
        </div>

        <div className="interact">
          <div className="buton">
            <Button title="LEIA MAIS" variant="AC" />
          </div>

          <Inova src={inova} />
        </div>
      </BoxTexts>
    </Container>
  )
}
