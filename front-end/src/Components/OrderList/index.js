import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import * as style from './styles';

import formatPrice from '../../utils/formatPrice';

const tableHeads = [
  'Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total', 'Remover Item'];

function OrderList() {
  const {
    cartProducts,
    products,
    cartSubTotalProductPrice,
    handlerCartProducts } = useContext(MyContext);

  return (
    <style.OrderTable>
      <thead>
        <style.TableRow>
          {tableHeads.map((title) => (
            <style.TableHeader key={ title }>
              {title}
            </style.TableHeader>))}
        </style.TableRow>
      </thead>

      <tbody>

        {cartProducts.map((cartProduct, cartProductIndex) => {
          const productFound = products.find((product) => product.id === cartProduct.id);
          const testName = 'customer_checkout__element-order-table';
          return (
            <style.TableRow key={ cartProduct.id }>
              <style.RowItem
                data-testid={ `${testName}-item-number-${cartProductIndex}` }
              >
                {cartProductIndex + 1}
              </style.RowItem>
              <style.RowItem
                data-testid={ `${testName}-name-${cartProductIndex}` }
              >
                {productFound.name}
              </style.RowItem>
              <style.RowItem
                data-testid={ `${testName}-quantity-${cartProductIndex}` }
              >
                {cartProduct.quantity}
              </style.RowItem>
              <style.RowItem
                data-testid={ `${testName}-unit-price-${cartProductIndex}` }
              >
                {formatPrice(Number(productFound.price))}
              </style.RowItem>
              <style.RowItem
                data-testid={ `${testName}-sub-total-${cartProductIndex}` }
              >
                {formatPrice(cartSubTotalProductPrice[cartProductIndex])}
              </style.RowItem>
              <style.RowItem>
                <button
                  data-testid={ `${testName}-remove-${cartProductIndex}` }
                  onClick={ () => handlerCartProducts(cartProduct.id, 0) }
                  type="button"
                >
                  Remover
                </button>
              </style.RowItem>
            </style.TableRow>
          );
        })}
      </tbody>
    </style.OrderTable>
  );
}

export default OrderList;
