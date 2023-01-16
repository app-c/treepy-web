import { render } from "react-dom"
import { RouteProps, Route as RouteDOM, redirect as Redirect } from "react-router-dom"
import { useAuth } from "../context/authcontext"

interface Props extends RouteProps {
  isPrivate?: boolean
  component: React.ComponentType
}

export function Route({isPrivate = false, component: Component, ...rest}: Props) {
  const {user} = useAuth()

  return (
    <RouteDOM 
      {...rest}
      render={() => {
          return isPrivate === !!user ? (
            <Component />
          ) : (
            <Redirect to={{ pathhname: isPrivate ? '/' : '/dashboard'}}
          )
      }}
    />
  )
}