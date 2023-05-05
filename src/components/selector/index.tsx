import * as S from './styles'

interface Props {
  selected: boolean
  title?: string
  pres?: () => void
  colorText?: S.TTextColor
}

export function Selector({ selected, pres, title, colorText = 'gray' }: Props) {
  return (
    <S.Box type="button" onClick={pres}>
      <label htmlFor="">
        <S.Container>
          <S.Circle selected={selected} />
        </S.Container>
        <S.text colorText={colorText}>{title}</S.text>
      </label>
    </S.Box>
  )
}
