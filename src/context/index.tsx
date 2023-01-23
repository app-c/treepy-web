import { AuthProvider } from './authcontext'
import { ToastProvider } from './ToastContext'

export function AppProvider({ children }: any) {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  )
}
