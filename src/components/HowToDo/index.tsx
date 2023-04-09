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
          <S.boxTitle>
            <S.title>Suas compras valem árvores</S.title>
          </S.boxTitle>

          <S.line />
          <S.text>
            Compras nos parceiros Treepy são convertidas em plantio de árvores
          </S.text>
        </S.box>

        <S.box>
          <S.boxTitle>
            <S.title className="title">
              Preencha o seu perfil de emissão
            </S.title>
          </S.boxTitle>
          <S.line />
          <S.text>
            Calcule quantas árvores são necessárias para a sua compensação de
            CO₂
          </S.text>
        </S.box>
        <S.box>
          <S.boxTitle>
            <S.title className="title">Crie seu cadastro</S.title>
          </S.boxTitle>
          <S.line />
          <S.text>Crie seu cadastro e comece a reflorestar conosco</S.text>
        </S.box>
        <S.box>
          <S.boxTitle>
            <S.title className="title">Reflorestamento em campo</S.title>
          </S.boxTitle>
          <S.line />
          <S.text>
            Acompanhe a evolução do reflorestamento nas plataformas Web e App
          </S.text>
        </S.box>
      </S.BoxCard>
    </S.Container>
  )
}
