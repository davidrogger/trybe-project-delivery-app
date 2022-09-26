import { useContext, useEffect } from 'react';
import MyContext from '../../context/MyContext';
import { getProducts } from '../../services/api';
import ProductCard from '../ProductsCard';
import { MainContainer } from './styles';

function ProductsDisplay() {
  const { products, setProducts } = useContext(MyContext);

  useEffect(() => {
    async function requestedProducts() {
      const response = await getProducts();
      setProducts(response.data);
    }
    requestedProducts();
  }, [setProducts]);

  return (
    <MainContainer>
      { products.map((product, index) => (
        <ProductCard
          key={ index }
          { ...product }
        />
      )) }
    </MainContainer>
  );
}

export default ProductsDisplay;
