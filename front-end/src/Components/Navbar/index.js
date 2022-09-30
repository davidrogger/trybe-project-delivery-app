import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import {
  NavBody,
  NavLeaveButtom,
  NavProductsButtom,
  NavUserNameButtom,
  NavSpacing,
} from './styles';

function Navbar() {
  const route = useParams();
  const { pathname } = useLocation();
  const endPoint = pathname.split('/')[2];

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
      { route.type === 'customer' && (
        <NavProductsButtom
          endPoint={ endPoint }
          btn="products"
          data-testid="customer_products__element-navbar-link-products"
          onClick={ () => navigate('/customer/products') }
        >
          PRODUTOS
        </NavProductsButtom>
      ) }

      <NavProductsButtom
        endPoint={ endPoint }
        btn="orders"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => navigate(`/${route.type}/orders`) }
      >
        { route.type === 'customer' ? 'MEUS PEDIDOS' : 'PEDIDOS' }
      </NavProductsButtom>

      <NavSpacing />

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
