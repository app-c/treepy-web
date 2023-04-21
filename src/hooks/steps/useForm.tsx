import React, { useState } from 'react'

interface props {
  step: any[]
  error?: any
}

export function useFormStep({ step, error }: props) {
  const [currentStep, setCurrentStep] = useState(0)

  const changeStep = React.useCallback(
    async (i: number) => {
      if (i < 0 || i >= step.length) return

      setCurrentStep(i)
    },
    [step.length],
  )

  return {
    currentStep,
    currentComponent: step[currentStep],
    changeStep,
    lastStep: currentStep + 1 === step.length,
  }
}
