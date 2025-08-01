import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import App from './App.jsx';
import './index.css';

import { Jobprovider } from './context/jobcontext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Jobprovider>
       <App/>
      </Jobprovider>
    </BrowserRouter>
  </StrictMode>
);