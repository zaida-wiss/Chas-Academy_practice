import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"; // Nödvändig import
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* Nu ligger kommentaren här, vilket är korrekt JSX-syntax */}
      <App />
    </BrowserRouter>
  </StrictMode>
)