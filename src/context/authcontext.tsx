import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'

interface IUser {
  password: string
  email: string
}

interface AuthState {
  token: string
  user: object
}

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

interface AuthContextData {
  user: object
  userP: any
  signIn(credentials: IUser): Promise<void>
  signInP(credentials: IUser): Promise<void>
  logOut: () => void

  encryted: IEncrypt | undefined
  colectData: (data: Iprops) => void
}

const keyUser = '@treepy:user'
const keyToken = '@treepy:tokn'

const keyUserP = '@treepy:userp'
const keyTokenP = '@treepy:toknp'

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: any) {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(keyToken)
    const user = localStorage.getItem(keyUser)

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState
  })

  const [dataP, setDataP] = useState<AuthState>(() => {
    const token = localStorage.getItem(keyTokenP)
    const user = localStorage.getItem(keyUserP)

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState
  })

  React.useEffect(() => {
    const token = localStorage.getItem(keyTokenP)

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
    }
  }, [])

  const signIn = useCallback(async ({ email, password }: IUser) => {
    await api
      .post('/user/session', {
        email,
        password,
      })
      .then((h) => {
        const { token, user } = h.data

        localStorage.setItem(keyToken, token)
        localStorage.setItem(keyUser, JSON.stringify(user))
        api.defaults.headers.common.Authorization = `Bearer ${token[1]}`

        setData({ token, user })
      })
    // .catch((h) => {
    //   if (h.message === 'Network Error') {
    //     return alert('Erro de conexão com o servidor')
    //   }
    //   return alert(`Ops! Algo deu errado. ${h.response.data.message}`)
    // })
  }, [])

  const signInP = useCallback(async ({ email, password }: IUser) => {
    await api
      .post('/user/session', {
        email,
        password,
      })
      .then((h) => {
        const { token, user } = h.data

        localStorage.setItem(keyTokenP, token)
        localStorage.setItem(keyUserP, JSON.stringify(user))
        api.defaults.headers.common.Authorization = `Bearer ${token}`

        setDataP({ token, user })
      })
    // .catch((h) => {
    //   if (h.message === 'Network Error') {
    //     return alert('Erro de conexão com o servidor')
    //   }
    //   return alert(`Ops! Algo deu errado. ${h.response.data.message}`)
    // })
  }, [])

  const logOut = useCallback(async () => {
    localStorage.removeItem(keyToken)
    localStorage.removeItem(keyUser)
    localStorage.removeItem(keyTokenP)
    localStorage.removeItem(keyUserP)

    setData({} as AuthState)
    setDataP({} as AuthState)
  }, [])

  const [encryted, setEncript] = useState<IEncrypt>()
  const [colection, setColection] = React.useState<Iprops>()

  const colectData = React.useCallback(async (item: Iprops) => {
    setColection(item)
  }, [])

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://assets.pagseguro.com.br/checkout-sdk-js/rc/dist/browser/pagseguro.min.js'
    script.onload = async () => {
      // faça outras chamadas à biblioteca do PagSeguro aqui
      const ra = window.PagSeguro.encryptCard(colection)
      setEncript(ra)
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [colection])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signInP,
        user: data.user,
        userP: dataP.user,
        logOut,
        colectData,
        encryted,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}
