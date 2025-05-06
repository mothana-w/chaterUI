// import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import { BrowserRouter } from "react-router";
import RegistrationPage from './components/Pages/RegistrationPage';
import NotFoundPage from './components/Pages/NotFoundPage';
import LoginPage from './components/Pages/LoginPage';
import LandingPage from './components/Pages/LandingPage';
import HomePage from './components/Pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="register" element={<RegistrationPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="home" element={<HomePage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
