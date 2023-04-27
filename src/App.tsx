import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './hooks/authContext'

import { Router } from './routes'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
