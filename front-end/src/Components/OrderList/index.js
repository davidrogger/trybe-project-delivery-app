import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import * as style from './styles';

const tableHeads = [
  'Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total', 'Remover Item'];

function OrderList() {
  const { cartProducts, products } = useContext(MyContext);

  return (
    <style.OrderTable>
      <style.TableRow>
        {tableHeads.map((title) => (
          <style.TableHeader key={ title }>
            {title}
          </style.TableHeader>))}
      </style.TableRow>

      {cartProducts.map((cartProduct, cartProductIndex) => {
        const productFound = products.find((product) => product.id === cartProduct.id);
        const itemTest = 'customer_checkout__element-order-table-item-number-';
        const nameTest = 'customer_checkout__element-order-table-name-';
        return (
          <style.TableRow key={ cartProduct.id }>
            <style.RowItem
              data-testid={ `${itemTest}${cartProductIndex}` }
            >
              {cartProductIndex + 1}
            </style.RowItem>
            <style.RowItem
              data-testid={ `${nameTest}${cartProductIndex}` }
            >
              {productFound.name}
            </style.RowItem>
            <style.RowItem>
              {cartProduct.quantity}
            </style.RowItem>
          </style.TableRow>
        );
      })}
    </style.OrderTable>
  );
}

export default OrderList;
