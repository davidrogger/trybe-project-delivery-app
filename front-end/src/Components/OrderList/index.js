import PropTypes from 'prop-types';
import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import * as style from './styles';

import formatPrice from '../../utils/formatPrice';

const tableHeads = [
  'Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total', 'Remover Item'];

function OrderList({ removeBtn = true, productsList, tableType, userType }) {
  const {
    products,
    productsLoading,
    handlerCartProducts } = useContext(MyContext);
  return (
    <style.OrderTable>
      <thead>
        <style.TableRow>
          {tableHeads.map((title) => {
            if (!removeBtn && title === 'Remover Item') return null;
            return (
              <style.TableHeader key={ title }>
                {title}
              </style.TableHeader>
            );
          })}
        </style.TableRow>
      </thead>
      { productsLoading
        ? null
        : (
          <tbody>

            {productsList.map((cartProduct, cartProductIndex) => {
              const productFound = products
                .find((product) => product.id === cartProduct.id);
              const testName = `${userType}_${tableType}__element-order-table`;
              const productUnitPrice = Number(productFound.price);
              const subTotalPrice = cartProduct.quantity * productUnitPrice;
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
                    {formatPrice(productUnitPrice)}
                  </style.RowItem>
                  <style.RowItem
                    data-testid={ `${testName}-sub-total-${cartProductIndex}` }
                  >
                    {formatPrice(subTotalPrice)}
                  </style.RowItem>
                  { removeBtn && (
                    <style.RowItem>
                      <button
                        data-testid={ `${testName}-remove-${cartProductIndex}` }
                        onClick={ () => handlerCartProducts(cartProduct.id, 0) }
                        type="button"
                      >
                        Remover
                      </button>
                    </style.RowItem>
                  ) }

                </style.TableRow>
              );
            })}
          </tbody>
        )}
    </style.OrderTable>
  );
}

OrderList.propTypes = {
  removeBtn: PropTypes.bool,
  productsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      quantity: PropTypes.number,
    }),
  ),
}.isRequired;

export default OrderList;
