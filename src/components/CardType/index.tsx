import * as S from './styles'

interface PropsCard {
  number: string
  name: string
  month: string
  year: string
  security: string
  brand: string
}

interface Props {
  infoCard: PropsCard
}

export function CardType({ infoCard }: Props) {
  return (
    <S.Container>
      <S.Bandeira>
        <h1>{infoCard.brand}</h1>
      </S.Bandeira>

      <S.Contents>
        <p>{infoCard.number}</p>
        <p>{infoCard.name}</p>

        <div>
          <p>
            {infoCard.month}/{infoCard.year}
          </p>
          <p>{infoCard.security}</p>
        </div>
      </S.Contents>
    </S.Container>
  )
}
