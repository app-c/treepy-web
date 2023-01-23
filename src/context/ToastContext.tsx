import { createContext, useCallback, useContext, useState } from 'react'
import { Toast } from '../components/Toast'

export interface PropsMessage {
  id: string
  type: 'success' | 'error' | 'info'
  title: string
  description?: string
}

interface ContextData {
  addToast: (message: Omit<PropsMessage, 'id'>) => void
  removeToas: (id: string) => void
}
const ToastContext = createContext<ContextData>({} as ContextData)

export function ToastProvider({ children }: any) {
  const [messges, setMessages] = useState<PropsMessage[]>([])

  const addToast = useCallback(
    async ({ type, title, description }: Omit<PropsMessage, 'id'>) => {
      const id = String(new Date().getTime())

      const toast = {
        id,
        type,
        title,
        description,
      }

      setMessages((old) => [...old, toast])
    },
    [],
  )

  const removeToas = useCallback(async (id: string) => {
    setMessages((state) => state.filter((h) => h.id !== id))
  }, [])

  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToas,
      }}
    >
      {children}
      <Toast messages={messges} />
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('use toast mus be used')
  }

  return context
}
