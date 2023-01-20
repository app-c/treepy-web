import { Route, Routes } from 'react-router-dom'
import { Calculadora } from '../pages/Calculadora'
import { Contact } from '../pages/contact'
import { DashBoard } from '../pages/DashBoard'
import { Home } from '../pages/home'
import { SignIn } from '../pages/signIn/index '
import { SignUp } from '../pages/signUp'
import { Test } from '../pages/test'
import { Us } from '../pages/Us'
import { AuthRoute } from './AuthRoute'

export function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="signIn" element={<SignIn />} />
        <Route path="/us" element={<Us />} />
      </Route>
      <Route path="/calc" element={<Calculadora />} />
      <Route path="/test" element={<Test />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signUp" element={<SignUp />} />

      <Route
        path="dash"
        element={
          <AuthRoute>
            <DashBoard />
          </AuthRoute>
        }
      />
    </Routes>
  )
}
