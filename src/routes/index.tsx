import { Navigate, Route, Routes } from 'react-router-dom'
import { Calculadora } from '../pages/App/Calculadora'
import { Contact } from '../pages/App/contact'
import { DashBoard } from '../pages/Auth/DashBoard'
import { Home } from '../pages/App/home'
import { Plan } from '../pages/App/Plan'
import { SignIn } from '../pages/App/signIn/index '
import { SignUp } from '../pages/App/signUp'
import { SignUpPay } from '../pages/App/signUpPay'
import { Test } from '../pages/App/test'
import { Us } from '../pages/App/Us'
import { AuthRoute } from './AuthRoute'
import { RouteApp } from './Route'
import { SignInProv } from '../pages/App/signInProv/index '

// interface Props {
//   dataSignUp?: object
// }

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<RouteApp />}>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signInProv" element={<SignInProv />} />
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
