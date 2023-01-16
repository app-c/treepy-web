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
            Suas compras são convertidas em créditos. Seus créditos são
            convertidos em árvores
          </p>
        </div>

        <div>
          <p className="title">Preencha o seu perfil de emissão</p>
          <line className="line" />
          <p>
            Calcule quantas árvores você precisará plantar para compensar a
            emissão de CO2
          </p>
        </div>
        <div>
          <p className="title">Faça seu cadastro</p>
          <line className="line" />
          <p>Comece a participar do Programa de Créditos de Reflorestamento.</p>
        </div>
        <div>
          <p className="title">Reflorestamento em campo</p>
          <line className="line" />
          <p>
            Acompanhe em nossa plataforma web ou app o andamento do processo de
            reflorestamento em cada projeto cadastrado
          </p>
        </div>
      </BoxCard>
    </Container>
  )
}
