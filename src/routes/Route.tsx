import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/authcontext'

export function RouteApp() {
  const { user } = useAuth()

  return user ? <Navigate to="/dash" /> : <Outlet />
}
