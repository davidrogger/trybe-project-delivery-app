import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import * as style from './styles';
import formatPrice from '../../utils/formatPrice';

function CheckoutButtom() {
  const navigate = useNavigate();
  const {
    cartProducts,
    cartTotalValue } = useContext(MyContext);

  return (
    <style.CartButton
      data-testid="customer_products__button-cart"
      disabled={ cartProducts.length === 0 }
      onClick={ () => navigate('/customer/checkout') }
    >
      Ver Carrinho
      <style.CartButtonContent>
        { 'R$: ' }
        <span data-testid="customer_products__checkout-bottom-value">
          { formatPrice(cartTotalValue) }
        </span>
      </style.CartButtonContent>
    </style.CartButton>
  );
}

export default CheckoutButtom;
