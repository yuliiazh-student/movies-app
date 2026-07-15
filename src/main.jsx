import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/scss/main.scss'
import App from './App.jsx'
import { router } from './routes.js'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
