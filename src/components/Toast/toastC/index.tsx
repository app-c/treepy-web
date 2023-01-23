import { useEffect } from 'react'
import { BsFillXCircleFill } from 'react-icons/bs'
import { PropsMessage, useToast } from '../../../context/ToastContext'
import * as S from './styles'

interface Props {
  message: PropsMessage
  style: any
}

export function ToastC({ message, style }: Props) {
  const { removeToas } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToas(message.id)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [message.id, removeToas])

  return (
    <S.Toast
      key={message.id}
      description={!!message.description}
      type={message.type}
      style={style}
    >
      <BsFillXCircleFill size={20} />
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToas(message.id)}>
        <BsFillXCircleFill size={18} />
      </button>
    </S.Toast>
  )
}
