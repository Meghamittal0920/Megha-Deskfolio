import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Seed Megha's GitHub as the "dev activity" link if the user hasn't set one yet.
try {
  if (!localStorage.getItem('df-dev-activity-link')) {
    localStorage.setItem('df-dev-activity-link', 'https://github.com/Meghamittal0920')
  }
} catch {
  /* localStorage unavailable */
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
