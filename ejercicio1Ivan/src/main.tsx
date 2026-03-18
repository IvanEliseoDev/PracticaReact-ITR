import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { Ejercicio1 } from './modules/page/ejercicio1'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Ejercicio1 />
  </StrictMode>,
)
