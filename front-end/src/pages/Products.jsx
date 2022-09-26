import Navbar from '../Components/Navbar';
import ProductsDisplay from '../Components/ProductsDisplay';

import { PageProducts as Page } from '../Components/ProductsCard/styles';
import CheckoutButtom from '../Components/CheckoutButtom';

function Products() {
  return (
    <>
      <Navbar />
      <Page>
        <ProductsDisplay />
      </Page>
      <CheckoutButtom />
    </>
  );
}

export default Products;
