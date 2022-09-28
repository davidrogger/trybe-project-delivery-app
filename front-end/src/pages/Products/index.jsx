import { useContext } from 'react';
import Navbar from '../../Components/Navbar';
import ProductsDisplay from '../../Components/ProductsDisplay';
import Loading from '../../Components/Loading';

import CheckoutButtom from '../../Components/CheckoutButtom';
import MyContext from '../../context/MyContext';

function Products() {
  const { productsLoading } = useContext(MyContext);
  return (
    <>
      <Navbar />
      { productsLoading
        ? <Loading />
        : (
          <>
            <ProductsDisplay />
            <CheckoutButtom />
          </>
        )}
    </>
  );
}

export default Products;
