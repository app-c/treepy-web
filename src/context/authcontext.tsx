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
  signIn(credentials: IUser): Promise<void>
  logOut: () => void
}

const keyUser = '@treepy:user'
const keyToken = '@treepy:tokn'

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

        setData({ token, user })
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
    <AuthContext.Provider value={{ signIn, user: data.user, logOut }}>
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
