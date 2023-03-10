import React, { createContext, useCallback, useContext, useState } from 'react'
import { api } from '../services/api'

interface IUser {
  password: string
  email: string
}

interface AuthState {
  token: string
  user: object
}

interface AuthContextData {
  user: object
  userP: any
  signIn(credentials: IUser): Promise<void>
  signInP(credentials: IUser): Promise<void>
  logOut: () => void
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
    console.log(token)

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

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider
      value={{ signIn, signInP, user: data.user, userP: dataP.user, logOut }}
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
