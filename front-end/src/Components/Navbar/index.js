import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import {
  NavBody,
  NavLeaveButtom,
  NavProductsButtom,
  NavUserNameButtom,
  NavOrdersButtom,
} from './styles';

function Navbar() {
  const route = useParams();
  const { setLogin } = useContext(MyContext);
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const handleClick = () => {
    localStorage.clear();
    setLogin(false);
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
        onClick={ () => navigate('/customer/products') }
      >
        PRODUTOS
      </NavProductsButtom>

      <NavOrdersButtom
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => navigate(`/${route.type}/orders`) }
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
