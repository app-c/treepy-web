import { Route, Routes } from 'react-router-dom'
import { Calculadora } from '../pages/Calculadora'
import { Contact } from '../pages/contact'
import { Home } from '../pages/home'
import { Test } from '../pages/test'
import { Us } from '../pages/Us'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/us" element={<Us />} />
      <Route path="/calc" element={<Calculadora />} />
      <Route path="/test" element={<Test />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
