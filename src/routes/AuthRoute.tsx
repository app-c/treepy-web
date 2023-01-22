import React, { Children } from 'react'
import { Navigate, Outlet, PathRouteProps } from 'react-router-dom'
import { useAuth } from '../context/authcontext'

interface Props extends PathRouteProps {
  isPrivate?: boolean
  component: React.ComponentType
}

export function AuthRoute({ ...children }: any) {
  const { user } = useAuth()

  const u = false
  return u ? <Outlet /> : <Navigate to="/signIn" />
}
