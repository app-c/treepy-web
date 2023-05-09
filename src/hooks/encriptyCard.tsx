import React, {
  useEffect,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'

interface Iprops {
  publicKey: string
  holder: string
  number: string
  expMonth: string
  expYear: string
  securityCode: string
}

export interface IEncrypt {
  encryptedCard: string
  errors: []
  hasErrors: boolean
}

export function EncriptCard(data: Iprops) {
  const [encript, setEncript] = useState<IEncrypt>()

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://assets.pagseguro.com.br/checkout-sdk-js/rc/dist/browser/pagseguro.min.js'
    script.onload = async () => {
      // faça outras chamadas à biblioteca do PagSeguro aqui
      const ra = window.PagSeguro.encryptCard(data) as IEncrypt
      setEncript(ra)
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return { encript }
}

interface ContextData {
  encryted: string
  colectData: (data: Iprops) => void
}

const EcryptyContext = createContext<ContextData>({} as ContextData)

export function EncryptProvider({ children }: any) {
  const [encryted, setEncript] = useState('')
  const [data, setData] = React.useState<Iprops>()

  const colectData = React.useCallback(async (item: Iprops) => {
    setData(item)
  }, [])

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://assets.pagseguro.com.br/checkout-sdk-js/rc/dist/browser/pagseguro.min.js'
    script.onload = async () => {
      // faça outras chamadas à biblioteca do PagSeguro aqui
      const ra = window.PagSeguro.encryptCard(data)
      setEncript(ra)
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [data])

  return (
    <EcryptyContext.Provider
      value={{
        encryted,
        colectData,
      }}
    >
      {children}
    </EcryptyContext.Provider>
  )
}

export function useEncrypt() {
  const context = useContext(EcryptyContext)

  if (!context) {
    throw new Error('use toast mus be used')
  }

  return context
}
