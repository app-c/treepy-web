import * as S from './styles'
import { PropsMessage } from '../../context/ToastContext'
import { ToastC } from './toastC'
import { useTransition } from '@react-spring/web'

interface Props {
  messages: PropsMessage[]
}

export function Toast({ messages }: Props) {
  const trans = useTransition(messages, {
    from: { opacity: 0, right: '-120%' },
    enter: { opacity: 1, right: '0%' },
    leave: { opacity: 0, right: '-120%' },
  })

  return (
    <S.Container>
      {trans((style, item) => (
        <ToastC key={item.id} style={style} mess={item} />
      ))}
    </S.Container>
  )
}
