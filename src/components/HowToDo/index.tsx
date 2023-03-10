import { useEffect } from 'react'
import * as S from './styles'
import Scroll from 'scrollreveal'

export function HowToDo() {
  const sr = Scroll({ reset: true })

  useEffect(() => {
    sr.reveal('.textos', { duration: 1500, delay: 300, distance: '50px' })
  }, [sr])

  return (
    <S.Container>
      <h1>COMO FUNCIONA</h1>
      <S.BoxCard className="textos">
        <S.box>
          <p className="title">Suas compras valem árvores</p>
          <line className="line" />
          <p>
            Compras nos parceiros Treepy são convertidos em plantio de árvores.
          </p>
        </S.box>

        <S.box>
          <p className="title">Preencha o seu perfil de emissão</p>
          <line className="line" />
          <p>
            Calcule quantas árvores são necessárias para a sua compensação de
            CO₂
          </p>
        </S.box>
        <S.box>
          <p className="title">Crie seu cadastro</p>
          <line className="line" />
          <p>Crie seu cadastro e comece a reflorestar conosco.</p>
        </S.box>
        <S.box>
          <p className="title">Reflorestamento em campo</p>
          <line className="line" />
          <p>
            Acompanhe nas plataforma Web ou App a evolução do reflorestamento.
          </p>
        </S.box>
      </S.BoxCard>
    </S.Container>
  )
}
