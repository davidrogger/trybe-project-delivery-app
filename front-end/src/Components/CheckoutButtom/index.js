import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import formatPrice from '../../utils/formatPrice';
import { CartButtom } from './styles';

function CheckoutButtom() {
  const navigate = useNavigate();
  const {
    products,
    cartProducts,
    setSubTotalProductPrice,
    cartTotalValue,
    setCartTotalValue } = useContext(MyContext);

  useEffect(() => {
    const subTotal = cartProducts
      .map((targetProduct) => { // Percorrer por todos itens no carrinho
        const productFound = products
          .find((product) => targetProduct.id === product.id); // Encontrando o produto para usar o preço para o calculo
        return (targetProduct.quantity * (Number(productFound.price) * 100)) / 100; // Para evitar float number multiplicando por 100
      });
    setSubTotalProductPrice(subTotal);
    const cartTotalPrice = subTotal
      .reduce((total, productTotal) => total + productTotal, 0); // soma todos produtos do carrinho ja multiplicados por seu preço

    setCartTotalValue(formatPrice(cartTotalPrice));
  }, [products, cartProducts, setCartTotalValue, setSubTotalProductPrice]);

  return (
    <CartButtom
      data-testid="customer_products__button-cart"
      disabled={ cartProducts.length === 0 }
      onClick={ () => navigate('/customer/checkout') }
    >
      Ver Carrinho: R$:
      <span data-testid="customer_products__checkout-bottom-value">
        { cartTotalValue }
      </span>
    </CartButtom>
  );
}

export default CheckoutButtom;
