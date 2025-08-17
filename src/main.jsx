import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Application Styles
import './index.css'

// Root Application Component
import App from './App.jsx'

// Application Entry Point
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
