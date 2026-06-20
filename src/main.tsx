import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' 
import { LanguageProvider } from './context/LanguageContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render( // <-- ¡AQUÍ ESTÁ EL CAMBIO!
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
)