import { useEffect, useState } from 'react';
import { CartButtom } from './styles';

function CheckoutButtom() {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartTotal(0); // Desenvolvendo logica para calculo de total;
  }, []);

  return (
    <CartButtom>
      Ver Carrinho: R$:
      <span data-testid="customer_products__checkout-bottom-value">
        { cartTotal }
      </span>
    </CartButtom>
  );
}

export default CheckoutButtom;
