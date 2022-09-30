import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Register from '../../Components/Forms/Register';
import MyContext from '../../context/MyContext';
import routes from '../../utils/routesPath';

function RegisterPage() {
  const { logged, setLogin } = useContext(MyContext);
  const user = JSON.parse(localStorage.getItem('user'), '{}');
  const navigate = useNavigate();

  if (user) {
    setLogin(true);
  }

  if (logged) navigate(`/${routes[user.role]}`);

  return (<Register />);
}

export default RegisterPage;
