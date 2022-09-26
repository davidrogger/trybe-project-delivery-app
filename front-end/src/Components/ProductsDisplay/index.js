import { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';
import ProductCard from '../ProductsCard';
import { MainContainer } from './styles';

function ProductsDisplay() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function requestedProducts() {
      const response = await getProducts();
      setProducts(response.data);
    }
    requestedProducts();
  }, []);

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
