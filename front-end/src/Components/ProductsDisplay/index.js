import { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';
import ProductCard from '../ProductsCard';
import { MainContainer } from './styles';

function ProductsDisplay() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function requestProducts() {
      const response = await getProducts();
      setProducts(response.data);
    }
    requestProducts();
  }, []);

  return (
    <MainContainer>
      { products.map(({ id, name }) => (
        <ProductCard
          key={ id }
          name={ name }
        />
      )) }
    </MainContainer>
  );
}

export default ProductsDisplay;
