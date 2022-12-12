import { Home } from './pages/home'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <div className="App">
        <Home />
      </div>
    </ChakraProvider>
  )
}

export default App
