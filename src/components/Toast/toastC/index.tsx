import { useEffect } from 'react'
import { BsFillXCircleFill } from 'react-icons/bs'
import { PropsMessage, useToast } from '../../../context/ToastContext'
import * as S from './styles'

interface Props {
  mess: PropsMessage
  style: any
}

export function ToastC({ mess, style }: Props) {
  const { removeToas } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToas(mess.id)
    }, 6000)

    return () => {
      clearTimeout(timer)
    }
  }, [mess.id, removeToas])

  return (
    <S.Toast
      key={mess.id}
      description={!!mess.description}
      type={mess.type}
      style={style}
    >
      <BsFillXCircleFill size={20} />
      <div>
        <strong>{mess.title}</strong>
        {mess.description && <p>{mess.description}</p>}
      </div>

      <button onClick={() => removeToas(mess.id)}>
        <BsFillXCircleFill size={18} />
      </button>
    </S.Toast>
  )
}
