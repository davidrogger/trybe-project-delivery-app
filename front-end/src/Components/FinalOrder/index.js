import { useContext } from 'react';
import MyContext from '../../context/MyContext';

import * as style from './styles';

function FinalOrder() {
  const { cartTotalValue } = useContext(MyContext);

  return (

    <style.FinalOrderDiv>
      <style.Title>Finalizar Pedido</style.Title>
      <style.ContentDiv>

        <style.TotalValueField>
          Total: R$:
          {' '}
          <span
            data-testid="customer_checkout__element-order-total-price"
          >
            {cartTotalValue}
          </span>
        </style.TotalValueField>
      </style.ContentDiv>
    </style.FinalOrderDiv>

  );
}

export default FinalOrder;
