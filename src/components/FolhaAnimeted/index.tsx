import { color } from '../../styles/colors'
import * as S from './styles'
interface Props {
  sizeY?: string
  sizeX?: string
  cor?: string
  title: string
  text: string
}
export function FolhaAnimeted({
  sizeX = '100%',
  sizeY = '100%',
  cor = color.green[10],
  title,
  text,
}: Props) {
  return (
    <S.Container>
      <S.Box sizeX={sizeX} sizeY={sizeY} color={cor}>
        <span>{title}</span>
        <p>{text}</p>
      </S.Box>
    </S.Container>
  )
}
