import { color } from '../../styles/colors'
import { Folha } from '../Icones/folha'
import { Logo } from '../Logo'
import * as S from './styles'

export function OurProject() {
  return (
    <S.Container>
      <S.ContentImage />

      <S.ContentText>
        <S.cHeader>
          <h2>Nossos Projetos</h2>
          <p>
            Damos a oportunidade para todos contribuírem para o reflorestamento
            na nossa plataforma.
          </p>
          <line />
        </S.cHeader>

        <div className="content">
          <S.Box>
            <div className="folha1">
              <Folha cor={color.green[40]} />
            </div>

            <S.BoxText>
              <h3>Acompanhe o plantio das suas árvores</h3>
              <p>
                você poderá acompanhar o plantio das suas árvores através de
                nossa plataforma web, naárea do cliente.
              </p>
            </S.BoxText>
          </S.Box>

          <S.Box>
            <div className="folha">
              <Folha cor={color.orange[20]} />
            </div>

            <S.BoxText>
              <h3>
                Copre dos parceiros Treepy e converta o seu cashback em árvores
              </h3>
              <p>
                Efetuando suas compras em nossos parceiros você poderá acumular
                Treepy Cash e direciona-los para o plantio de suas árvores. (em
                desenvolvimento)
              </p>
            </S.BoxText>
          </S.Box>

          <S.Box>
            <div className="folha">
              <Folha cor={color.green[10]} />
            </div>

            <S.BoxText>
              <h3>Compre seus créditos Treepy Cashs direto com a gente</h3>
              <p>
                Você pode também comprar seus Treepy Cashs diretamente do nosso
                site na área do cliente, depois de calcular o valor correto
                baseado na sua emissão de CO2.
              </p>
            </S.BoxText>
          </S.Box>
        </div>

        <S.Contact>
          <h1>Seja um parceiro</h1>

          <div className="logo">
            <Logo colorL={color.orange[20]} />
          </div>

          <S.buton>Clique aqui</S.buton>
        </S.Contact>
      </S.ContentText>
    </S.Container>
  )
}
