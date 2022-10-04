import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Register from '../../../Components/Authentication/Register';
import MyContext from '../../../context/MyContext';

import routes from '../../../utils/routesPath';

import Styles from '../styles';

function RegisterPage() {
  const { logged, setLogin } = useContext(MyContext);
  const user = JSON.parse(localStorage.getItem('user'), '{}');
  const navigate = useNavigate();

  if (user) {
    setLogin(true);
  }

  if (logged) navigate(`/${routes[user.role]}`);

  return (
    <Styles.AutenticationDiv>
      <Register />
    </Styles.AutenticationDiv>
  );
}

export default RegisterPage;
