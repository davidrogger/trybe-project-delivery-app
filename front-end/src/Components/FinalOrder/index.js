import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import OrderList from '../OrderList';
import formatPrice from '../../utils/formatPrice';

import * as style from './styles';

function FinalOrder() {
  const { cartTotalValue } = useContext(MyContext);

  return (

    <style.FinalOrderDiv>
      <style.Title>Finalizar Pedido</style.Title>
      <style.ContentDiv>
        <OrderList />
        <style.TotalValueField>
          Total: R$:
          {' '}
          <span
            data-testid="customer_checkout__element-order-total-price"
          >
            {formatPrice(cartTotalValue)}
          </span>
        </style.TotalValueField>
      </style.ContentDiv>
    </style.FinalOrderDiv>

  );
}

export default FinalOrder;
