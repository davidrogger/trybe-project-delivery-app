import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import OrderList from '../OrderList';

import * as style from './styles';
import TotalValueDisplay from '../TotalValueDisplay';
import formatPrice from '../../utils/formatPrice';

function FinalOrder() {
  const { cartProducts, cartTotalValue } = useContext(MyContext);
  const testType = 'checkout';

  return (

    <style.FinalOrderDiv>
      <style.Title>Finalizar Pedido</style.Title>
      <style.ContentDiv>
        <OrderList
          productsList={ cartProducts }
          testType={ testType }
        />
        <TotalValueDisplay
          testType={ testType }
          value={ formatPrice(cartTotalValue) }
        />
      </style.ContentDiv>
    </style.FinalOrderDiv>

  );
}

export default FinalOrder;
