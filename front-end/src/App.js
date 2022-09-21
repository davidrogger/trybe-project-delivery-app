import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import MyProvider from './context/MyProvider';
import LoginPage from './pages/Login';

function App() {
  return (
    <MyProvider>
      <Switch>
        <Route exact path="/login" component={ LoginPage } />
        <Route exact path="/"><Redirect to="/login" /></Route>

      </Switch>
    </MyProvider>
  );
}

export default App;
