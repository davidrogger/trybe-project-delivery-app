import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import { CartButtom } from './styles';

function CheckoutButtom() {
  const navigate = useNavigate();
  const { products, cartProducts } = useContext(MyContext);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const cartTotalPrice = cartProducts
      .map((targetProduct) => { // Percorrer por todos itens no carrinho
        const productFound = products
          .find((product) => targetProduct.id === product.id); // Encontrando o produto para usar o preço para o calculo
        return (targetProduct.quantity * (Number(productFound.price) * 100)) / 100; // Para evitar float number multiplicando por 100
      })
      .reduce((total, productTotal) => total + productTotal, 0) // soma todos produtos do carrinho ja multiplicados por seu preço
      .toFixed(2) // para garantir que só serão exibidos 2 digitos após o ponto "."
      .replace('.', ','); // teste espera encontrar virgula.

    setCartTotal(cartTotalPrice);
  }, [products, cartProducts]);

  return (
    <CartButtom
      data-testid="customer_products__button-cart"
      disabled={ cartProducts.length === 0 }
      onClick={ () => navigate('/customer/checkout') }
    >
      Ver Carrinho: R$:
      <span data-testid="customer_products__checkout-bottom-value">
        { cartTotal }
      </span>
    </CartButtom>
  );
}

export default CheckoutButtom;
