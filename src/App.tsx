import { LateralMenu } from './components/LateralMenu'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Router } from './routes'
import { MainContainer } from './pages/MainContainer'

function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <LateralMenu />
        <div className="flex-grow">
          <Header />
          <Router />
        </div>
      </MainContainer>
    </BrowserRouter>
  )
}

export default App
