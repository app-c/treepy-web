import { useNavigate } from 'react-router-dom'

export function _navigation(route: string) {
  const nv = useNavigate()

  nv(route)
}
