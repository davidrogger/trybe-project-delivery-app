import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';

export default function Rout() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route exact path="/"><Redirect to="/login" /></Route>
    </Switch>
  );
}

/* a tela de login deve ser capaz de direcionar para a tela principal de cada pessoa usuária, sendo as páginas:

Do cliente: /customer/products,
Da pessoa vendedora: /seller/orders,
Da pessoa administradora: /admin/manage */
