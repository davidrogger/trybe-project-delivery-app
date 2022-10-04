import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Login from '../../../Components/Authentication/Login';
import MyContext from '../../../context/MyContext';

import routes from '../../../utils/routesPath';

import Styles from '../styles';

function LoginPage() {
  const { logged, setLogin } = useContext(MyContext);
  const user = JSON.parse(localStorage.getItem('user'), '{}');
  const navigate = useNavigate();

  if (user) {
    setLogin(true);
  }

  if (logged) navigate(`/${routes[user.role]}`);

  return (
    <Styles.AutenticationDiv>
      <Login />
    </Styles.AutenticationDiv>
  );
}

export default LoginPage;
