import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
     <Toaster position="top-right" />
    </BrowserRouter>
  </StrictMode>,
)
