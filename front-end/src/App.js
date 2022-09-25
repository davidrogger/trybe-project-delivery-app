import React from 'react';
import './css/App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import MyProvider from './context/MyProvider';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ProductsPage from './pages/Products';

function App() {
  return (
    <MyProvider>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route exact path="/login" element={ <LoginPage /> } />
        <Route exact path="/register" element={ <RegisterPage /> } />
        <Route exact path="/customer/products" element={ <ProductsPage /> } />
      </Routes>
    </MyProvider>
  );
}

export default App;
