import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SecondApp from './SecondApp'

createRoot(document.getElementById('root')).render(<SecondApp />)
