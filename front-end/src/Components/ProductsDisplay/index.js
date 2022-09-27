import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import ProductCard from '../ProductsCard';
import { MainContainer } from './styles';

function ProductsDisplay() {
  const { products } = useContext(MyContext);

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
