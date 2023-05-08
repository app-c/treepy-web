import React, { useId, useRef } from 'react'
import * as S from './styles'
import { CadastroStepOne } from '../../components/cadastroSteps/stepOne'
import { CadastroStepTwo } from '../../components/cadastroSteps/stepTwo'
import { useFormStep } from '../../hooks/steps/useForm'
import { Button } from '../../components/Button'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

export function Teste() {
  const key = useId()
  const ref = useRef<FormHandles>(null)
  const components = [<CadastroStepOne key={key} />]

  const { changeStep, currentComponent, currentStep } = useFormStep({
    step: components,
  })

  const [dataStep1, setDataStep1] = React.useState()

  const submit = React.useCallback(
    async (data: any) => {
      changeStep(currentStep + 1)
      console.log(data, 'da')
      setDataStep1(data)
    },
    [changeStep, currentStep],
  )

  const preview = React.useCallback(async () => {
    changeStep(currentStep - 1)
  }, [changeStep, currentStep])

  console.log(changeStep, currentStep)

  return (
    <S.Container>
      <Form
        // initialData={{
        //   name: dataStep1?.name,
        //   email: dataStep1?.email,
        // }}
        ref={ref}
        onSubmit={submit}
      >
        {currentComponent}
        <Button type="submit" title="next" />
        <Button type="button" pres={preview} title="preview" />
      </Form>
    </S.Container>
  )
}
