import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import MyProvider from './context/MyProvider';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ProductsPage from './pages/Products';
import CheckoutPage from './pages/Checkout';
import OrderDetailsPage from './pages/OrderDetails';
import Orders from './pages/Orders';

function App() {
  return (
    <MyProvider>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route exact path="/login" element={ <LoginPage /> } />
        <Route exact path="/register" element={ <RegisterPage /> } />
        <Route exact path="/customer/products" element={ <ProductsPage /> } />
        <Route exact path="/customer/checkout" element={ <CheckoutPage /> } />
        <Route exact path="/:type/orders/:id" element={ <OrderDetailsPage /> } />
        <Route exact path="/:type/orders" element={ <Orders /> } />
      </Routes>
    </MyProvider>
  );
}

export default App;
