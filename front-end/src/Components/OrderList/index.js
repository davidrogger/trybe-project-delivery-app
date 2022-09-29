import PropTypes from 'prop-types';
import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import * as Style from './styles';

import formatPrice from '../../utils/formatPrice';

const tableHeads = [
  'Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total', 'Remover Item'];

function OrderList({ removeBtn = true, productsList, tableType, userType }) {
  const {
    products,
    productsLoading,
    handlerCartProducts } = useContext(MyContext);
  return (
    <Style.Table>
      <Style.THead>
        <tr>
          {tableHeads.map((title) => {
            if (!removeBtn && title === 'Remover Item') return null;
            return (
              <th key={ title }>
                {title}
              </th>
            );
          })}
        </tr>
      </Style.THead>
      { productsLoading
        ? null
        : (
          <Style.TBody>

            {productsList.map((cartProduct, cartProductIndex) => {
              const productFound = products
                .find((product) => product.id === cartProduct.id);
              const testName = `${userType}_${tableType}__element-order-table`;
              const productUnitPrice = Number(productFound.price);
              const subTotalPrice = cartProduct.quantity * productUnitPrice;
              return (
                <tr key={ cartProduct.id }>
                  <td
                    data-testid={ `${testName}-item-number-${cartProductIndex}` }
                  >
                    {cartProductIndex + 1}
                  </td>
                  <td
                    data-testid={ `${testName}-name-${cartProductIndex}` }
                  >
                    {productFound.name}
                  </td>
                  <td
                    data-testid={ `${testName}-quantity-${cartProductIndex}` }
                  >
                    {cartProduct.quantity}
                  </td>
                  <td
                    data-testid={ `${testName}-unit-price-${cartProductIndex}` }
                  >
                    {formatPrice(productUnitPrice)}
                  </td>
                  <td
                    data-testid={ `${testName}-sub-total-${cartProductIndex}` }
                  >
                    {formatPrice(subTotalPrice)}
                  </td>
                  { removeBtn && (
                    <td>
                      <Style.Button
                        data-testid={ `${testName}-remove-${cartProductIndex}` }
                        onClick={ () => handlerCartProducts(cartProduct.id, 0) }
                        type="button"
                      >
                        Remover
                      </Style.Button>
                    </td>
                  ) }

                </tr>
              );
            })}
          </Style.TBody>
        )}
    </Style.Table>
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
