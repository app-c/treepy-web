import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { AppProvider } from './context'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  const query = new QueryClient()
  return (
    <div className="App">
      <BrowserRouter>
        <AppProvider>
          <QueryClientProvider client={query}>
            <Router />
          </QueryClientProvider>
        </AppProvider>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  )
}

export default App
