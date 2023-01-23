import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { AppProvider } from './context'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppProvider>
          <Router />
        </AppProvider>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  )
}

export default App
