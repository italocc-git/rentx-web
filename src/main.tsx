import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'react-calendar/dist/Calendar.css'
import './lib/i18n'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <App />
  </>,
)
