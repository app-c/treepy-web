import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/authcontext'

export function AuthRoute({ children }: any) {
  const { user } = useAuth()

  const u = true
  return u ? children : <Navigate to="/" />
}
