import Navbar from '../Components/Navbar';
import ProductsDisplay from '../Components/ProductsDisplay';

import { PageProducts as Page } from '../Components/ProductsCard/styles';

function Products() {
  return (
    <div>
      <Navbar />
      <Page>
        <ProductsDisplay />
      </Page>
    </div>
  );
}

export default Products;
