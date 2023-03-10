import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { getProducts } from '../services/api';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [logged, setLogin] = useState(false); // vamos desenvolver um direcionamento melhor de usuários, para quando um usuário tentar acessar uma rota sem permissão ser redirecionado automagicamente.
  const [cartProducts, setCartProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cartTotalValue, setCartTotalValue] = useState(0);

  useEffect(() => {
    async function requestedProducts() {
      setProductsLoading(true);
      const response = await getProducts();
      setProducts(response.data);
      setProductsLoading(false);
    }
    requestedProducts();
  }, []);

  useEffect(() => {
    const subTotal = cartProducts
      .map((targetProduct) => { // Percorrer por todos itens no carrinho
        const productFound = products
          .find((product) => targetProduct.id === product.id); // Encontrando o produto para usar o preço para o calculo
        return (targetProduct.quantity * (Number(productFound.price) * 100)) / 100; // Para evitar float number multiplicando por 100
      });
    const cartTotalPrice = subTotal
      .reduce((total, productTotal) => total + productTotal, 0); // soma todos produtos do carrinho ja multiplicados por seu preço

    setCartTotalValue(cartTotalPrice);
  }, [products, cartProducts, setCartTotalValue]);

  const session = useMemo(() => ({
    getProductQuantity(id) {
    // Caso o product não exista no carrinho, ele retorna 0
      return cartProducts.find((product) => product.id === id)?.quantity || 0;
    },
    handlerCartProducts(id, quantity) {
      setCartProducts((targetProduct) => {
        // Caso a quantidade seja igual a 0 filtra removendo do carrinho.
        if (quantity === 0) return targetProduct.filter((product) => product.id !== id);
        // Caso não exista no carrinho adiciona ao carrinho.
        if (targetProduct.find((product) => product.id === id) == null) {
          return [...targetProduct, { id, quantity }];
        }
        return targetProduct.map((product) => {
          if (product.id === id) {
          // Caso exista atualiza a quantidade com base em seu id
            return { ...product, quantity };
          }
          return product;
        });
      });
    },
    logged,
    setLogin,
    cartProducts,
    setCartProducts,
    products,
    setProducts,
    cartTotalValue,
    setCartTotalValue,
    productsLoading,
  }), [
    cartProducts, products, cartTotalValue, productsLoading, logged, setLogin,
  ]);

  return (
    <MyContext.Provider value={ session }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;

// useMemo: https://blog.agney.dev/useMemo-inside-context/
// addProductCart: Usado parcial conhecimento de um guide do Small Projects https://www.youtube.com/watch?v=lATafp15HWA
