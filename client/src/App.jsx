import { useState } from 'react';
import Register from './components/Register';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import Forgot from './components/Forgot';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import OtpForm from './components/OtpForm';
import LoginSuccess from './components/Loginsuccess';
import Profile from './components/Profile';
import RegisterSuccess from './components/RegisterSuccess';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgot" element={<Forgot/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
        <Route path="/otp-form/:email" element={<OtpForm/>}/>
        <Route path="/login-success" element={<LoginSuccess/>}/>
        <Route path="/register-success" element={<RegisterSuccess/>}/>
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
