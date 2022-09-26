import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  NavBody,
  NavLeaveButtom,
  NavProductsButtom,
  NavUserNameButtom,
  NavOrdersButtom,
} from './styles';

function Navbar() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleClick = () => {
    localStorage.clear();
    navigate('/login');
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUserName(userData.name);
  }, []);

  return (
    <NavBody>
      <NavProductsButtom
        data-testid="customer_products__element-navbar-link-products"
      >
        PRODUTOS
      </NavProductsButtom>

      <NavOrdersButtom
        data-testid="customer_products__element-navbar-link-orders"
      >
        MEUS PEDIDOS
      </NavOrdersButtom>

      <NavUserNameButtom
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { userName }
      </NavUserNameButtom>

      <NavLeaveButtom
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => handleClick() }
      >
        Sair
      </NavLeaveButtom>

    </NavBody>
  );
}

export default Navbar;
