import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MyProvider from './context/MyProvider';
import LoginPage from './pages/Login';

function App() {
  return (
    <MyProvider>
      <Routes>
        <Route exact path="/" element={ <LoginPage /> } />
        <Route exact path="/login" element={ <LoginPage /> } />

      </Routes>
    </MyProvider>
  );
}

export default App;
