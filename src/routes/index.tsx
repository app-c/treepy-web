import { Navigate, Route, Routes } from 'react-router-dom'
import { Calculadora } from '../pages/Calculadora'
import { Contact } from '../pages/contact'
import { DashBoard } from '../pages/DashBoard'
import { Home } from '../pages/home'
import { Plan } from '../pages/Plan'
import { SignIn } from '../pages/signIn/index '
import { SignUp } from '../pages/signUp'
import { SignUpPay } from '../pages/signUpPay'
import { Test } from '../pages/test'
import { Us } from '../pages/Us'
import { AuthRoute } from './AuthRoute'
import { RouteApp } from './Route'

interface Props {
  dataSignUp?: object
}

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<RouteApp />}>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/us" element={<Us />} />
        <Route path="/calc" element={<Calculadora />} />
        <Route path="/test" element={<Test />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signUp/" element={<SignUp />} />
        <Route path="/signUp/:type" element={<SignUpPay />} />
        <Route path="/plan/:value" element={<Plan />} />
      </Route>

      <Route path="/" element={<AuthRoute />}>
        <Route path="/" element={<Navigate replace to="dash" />} />
        <Route path="dash" element={<DashBoard />} />
      </Route>
    </Routes>
  )
}
