import { LateralMenu } from './components/LateralMenu'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Router } from './routes'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <LateralMenu />
    </BrowserRouter>
  )
}

export default App
