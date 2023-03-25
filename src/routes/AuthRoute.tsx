import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/authcontext'

export function AuthRoute() {
  const { user } = useAuth()

  return user ? <Outlet /> : <Navigate to="/home" />
}
