import { Link } from 'react-router-dom'
import { color } from '../../styles/colors'
import { Folha } from '../Icones/folha'
import { Logo } from '../Logo'
import * as S from './styles'

export function OurProject() {
  return (
    <S.box>
      <S.Container>
        <S.ContentImage />

        <S.ContentText>
          <S.cHeader>
            <h2>Nossos Projetos</h2>
            <p>
              Oferecemos a oportunidade de todos compensarem seus impactos .
            </p>
            <line />
          </S.cHeader>

          <div className="content">
            <S.Box>
              <div className="folha1">
                <Folha cor={color.green[40]} />
              </div>

              <S.BoxText>
                <h3>Usuários</h3>
                <p>Qualquer pessoa pode mitigar as suas emissões de CO₂</p>
              </S.BoxText>
            </S.Box>

            <S.Box>
              <div className="folha1">
                <Folha cor={color.orange[20]} />
              </div>

              <S.BoxText>
                <h3>Clientes</h3>
                <p>
                  Contribuem na fidelização dos seus consumidores e vantagem
                  competitiva
                </p>
              </S.BoxText>
            </S.Box>

            <S.Box>
              <div className="folha1">
                <Folha cor={color.green[10]} />
              </div>

              <S.BoxText>
                <h3>Parceiros (reflorestadores)</h3>
                <p>
                  Viabilizam de projetos de reflorestamentos com menor custo
                </p>
              </S.BoxText>
            </S.Box>

            <S.Box>
              <div className="folha1">
                <Folha cor={color.green[30]} />
              </div>

              <S.BoxText>
                <h3>Planeta (meio ambiente)</h3>
                <p>Reduzem os efeitos maléficos da emissão de CO₂</p>
              </S.BoxText>
            </S.Box>

            <S.subTitle>
              Dessa forma vuscamos promover a sustentabilidade na natureza e o
              futuro das próximas gerações
            </S.subTitle>
          </div>

          <S.Contact>
            <S.button>
              <S.link to="/parc" style={{ color: color.green[40] }}>
                {' '}
                Fale conosco
              </S.link>{' '}
            </S.button>
          </S.Contact>
        </S.ContentText>
      </S.Container>
    </S.box>
  )
}
