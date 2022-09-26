import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  // const [user, setUser] = useState({});
  const [cartProducts, setCartProducts] = useState([]);

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
    cartProducts,
    setCartProducts,
  }), [cartProducts, setCartProducts]);

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
