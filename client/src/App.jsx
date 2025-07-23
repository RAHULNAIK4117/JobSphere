import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Login from './pages/login.jsx'
import './App.css'

function App() {
  

  return (
    <>
      <Navbar />


      <Routes>
        <Route path='/login' element= {<Login />} />
        

      </Routes>


    </>
  );
}

export default App
