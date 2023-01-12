import {
  Box,
  BoxFolha,
  BoxGridFolha,
  ContentFolha,
  ContentTextFolha
} from './styles'

export function Folha() {
  return (
    <Box>
      <BoxFolha>
        <ContentTextFolha>
          <div>
            <p>texto</p>
            <p className="title">Mindset</p>
          </div>
          <line className="line" />
        </ContentTextFolha>

        <BoxGridFolha>
          <ContentFolha>
            <div className="folha1">
              <h3>Promação de um futuro melhor às próximas geraões</h3>
              <p>Pensar no planeta é zelar por um futuro melhor</p>
            </div>
          </ContentFolha>

          <ContentFolha>
            <div className="folha2">
              <h3>Tecnologia em prol do meio ambiente</h3>
              <p>
                A tecnologia sendo usada para reduzir os impactos negativos no
                planeta
              </p>
            </div>
          </ContentFolha>

          <ContentFolha>
            <div className="folha3">
              <h3>Promação de um futuro melhor às próximas geraões</h3>
              <p>
                Primeiro Programa de Créditos focado na geração de valor para o
                meio ambiente
              </p>
            </div>
          </ContentFolha>

          <ContentFolha>
            <div className="folha4">
              <h3>Compensação de danos causados</h3>
              <p>
                Oportunidade de compensar os danos causados ao meio ambiente
              </p>
            </div>
          </ContentFolha>
        </BoxGridFolha>
      </BoxFolha>
    </Box>
  )
}
