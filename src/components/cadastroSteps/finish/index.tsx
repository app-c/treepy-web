import React from 'react'
import { Selector } from '../../selector'
import * as S from './styles'
import { Link } from 'react-router-dom'
import term from '../../../../public/termos_treepy.pdf'

interface Iprops {
  termos: (item: boolean) => void
  notifications: (item: boolean) => void
}

export function FinshiSignUp({ termos, notifications }: Iprops) {
  const [termo, setTermo] = React.useState(false)
  const [notification, setNotification] = React.useState(false)

  return (
    <S.container>
      <S.boxTermo to={term} target="_blank">
        Clique para ler os Termos e Condições
      </S.boxTermo>
      <S.content>
        <Selector
          selected={termo}
          pres={() => {
            setTermo(!termo)
            termos(true)
          }}
          title="Li e aceito os Termos e Condições"
        />
        <Selector
          selected={notification}
          pres={() => {
            setNotification(!notification)
            notifications(true)
          }}
          title="Desejo receber e-mails informativos (SMS, E-mail e Push Notification)"
        />
      </S.content>
      <S.title>Clique em salvar para finalizar seu cadastro</S.title>
    </S.container>
  )
}
