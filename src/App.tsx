import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './hooks'

import { Router } from './routes'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
