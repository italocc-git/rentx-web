import './lib/firebase/firebase'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './hooks'
import { ApolloProvider } from '@apollo/client'
import { Router } from './routes'
import { apolloClient } from './services/api'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AppProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppProvider>
    </ApolloProvider>
  )
}

export default App
