import { render } from 'react-dom'
import {
  RouteProps,
  Route as RouteDOM,
  redirect as Redirect,
} from 'react-router-dom'
import { useAuth } from '../context/authcontext'

// interface Props extends RouteProps {
//   isPrivate?: boolean
//   component: React.ComponentType
// }

export function Route() {
  const { user } = useAuth()

  return <div></div>
}
