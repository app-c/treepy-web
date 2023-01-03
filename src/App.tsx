import { Home } from './pages/home'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  )
}

export default App
