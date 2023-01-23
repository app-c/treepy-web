import * as S from './styles'
import { PropsMessage } from '../../context/ToastContext'
import { ToastC } from './toastC'
import { useTransition } from 'react-spring'

interface Props {
  messages: PropsMessage[]
}

export function Toast({ messages }: Props) {
  const items = [
    { key: 1, text: 'Item 1' },
    { key: 2, text: 'Item 2' },
    { key: 3, text: 'Item 3' },
  ]

  const trans = useTransition(messages, () => ({
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  }))
  return (
    <S.Container>
      {trans.map((style, item) => (
        <Toast key={item} messages={item} style={style} />
      ))}
    </S.Container>
  )
}
