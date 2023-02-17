import { BoxCard, Container } from './styles'

export function HowToDo() {
  return (
    <Container>
      <h1>COMO FUNCIONA</h1>
      <BoxCard>
        <div>
          <p className="title">Suas compras valem árvores</p>
          <line className="line" />
          <p>
            Compras nos parceiros Treepy são convertidos em plantio de árvores.
          </p>
        </div>

        <div>
          <p className="title">Preencha o seu perfil de emissão</p>
          <line className="line" />
          <p>
            Calcule quantas árvores são necessárias para a sua compensação de
            CO₂
          </p>
        </div>
        <div>
          <p className="title">Crie seu cadastro</p>
          <line className="line" />
          <p>Crie seu cadastro e comece a reflorestar conosco.</p>
        </div>
        <div>
          <p className="title">Reflorestamento em campo</p>
          <line className="line" />
          <p>
            Acompanhe nas plataforma Web ou App a evolução do reflorestamento.
          </p>
        </div>
      </BoxCard>
    </Container>
  )
}
