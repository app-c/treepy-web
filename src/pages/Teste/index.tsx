import React, { useEffect, useId, useRef } from 'react'
import * as S from './styles'
import { CadastroStepOne } from '../../components/cadastroSteps/stepOne'
import { CadastroStepTwo } from '../../components/cadastroSteps/stepTwo'
import { useFormStep } from '../../hooks/steps/useForm'
import { Button } from '../../components/Button'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { EncriptCard } from '../../hooks/encriptyCard'

declare global {
  interface Window {
    PagSeguro?: any
  }
}

export function Teste() {
  const key =
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr+ZqgD892U9/HXsa7XqBZUayPquAfh9xx4iwUbTSUAvTlmiXFQNTp0Bvt/5vK2FhMj39qSv1zi2OuBjvW38q1E374nzx6NNBL5JosV0+SDINTlCG0cmigHuBOyWzYmjgca+mtQu4WczCaApNaSuVqgb8u7Bd9GCOL4YJotvV5+81frlSwQXralhwRzGhj/A57CGPgGKiuPT+AOGmykIGEZsSD9RKkyoKIoc0OS8CPIzdBOtTQCIwrLn2FxI83Clcg55W8gkFSOS6rWNbG5qFZWMll6yl02HtunalHmUlRUL66YeGXdMDC2PuRcmZbGO5a/2tbVppW6mfSWG3NPRpgwIDAQAB'

  const data = {
    publicKey: key,
    holder: 'Nome Sobrenome',
    number: '4242424242424242',
    expMonth: '12',
    expYear: '2030',
    securityCode: '123',
  }
  const { encript } = EncriptCard(data)

  console.log(encript, 'ok')

  return (
    <S.Container>
      <h1>hello</h1>
    </S.Container>
  )
}
