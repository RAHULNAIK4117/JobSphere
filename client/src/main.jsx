import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Jobprovider } from './context/jobcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
    <Jobprovider>
    <App />
    </Jobprovider>
    </BrowserRouter>
    
  </StrictMode>
)
