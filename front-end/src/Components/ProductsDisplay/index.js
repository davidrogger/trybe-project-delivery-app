import { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';
import ProductCard from '../ProductsCard';
import { MainContainer } from './styles';

function ProductsDisplay() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function requestProducts() {
      const response = await getProducts();
      console.log(response.data);
      setProducts(response.data);
    }
    requestProducts();
  }, []);

  return (
    <MainContainer>
      { products.map((product) => (
        <ProductCard
          key={ product.id }
          product={ product }
        />
      )) }
    </MainContainer>
  );
}

export default ProductsDisplay;
