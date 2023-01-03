import { Route, Routes } from 'react-router-dom'
import { Calculadora } from '../pages/Calculadora'
import { Home } from '../pages/home'
import { Us } from '../pages/Us'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/us" element={<Us />} />
      <Route path="/calc" element={<Calculadora />} />
    </Routes>
  )
}
