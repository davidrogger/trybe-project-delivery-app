import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as style from './styles';
import formatPrice from '../../utils/formatPrice';
import formatDate from '../../utils/formatDate';

function OrderCard(
  { id, status, saleDate, totalPrice, type, deliveryAddress, deliveryNumber },
) {
  const navigate = useNavigate();
  const testName = `${type}_orders__`;
  const order = (num) => {
    const test = `${testName}element-order-id-${id}`;
    const DIGIT_NUMBER = 4;
    return (
      <style.OrderIdDiv data-testid={ test }>
        Pedido
        <style.IdSpan>
          {num.toString().padStart(DIGIT_NUMBER, '0')}
        </style.IdSpan>
      </style.OrderIdDiv>
    );
  };

  const statusDisplay = (s) => {
    const test = `${testName}element-delivery-status-${id}`;
    return (
      <style.OrderSubInfo1 data-testid={ test }>{s}</style.OrderSubInfo1>
    );
  };

  const dateDisplay = (d) => {
    const test = `${testName}element-order-date-${id}`;
    return (
      <style.HighlightInfo data-testid={ test }>
        { formatDate(d) }
      </style.HighlightInfo>
    );
  };

  const prices = (p) => {
    const test = `${testName}element-card-price-${id}`;
    return (
      <style.HighlightInfo data-testid={ test }>
        {formatPrice(Number(p))}
      </style.HighlightInfo>
    );
  };

  const addressData = (street, number) => {
    const test = `${testName}element-card-address-${id}`;
    return (
      <style.OrderInfoDown data-testid={ test }>
        {`${street}, ${number}`}
      </style.OrderInfoDown>
    );
  };

  return (
    <style.OrderCardBody
      onClick={ () => navigate(`/${type}/orders/${id}`) }
    >
      { order(id) }
      <style.OrderInfoDiv>
        <style.OrderInfoUp>
          { statusDisplay(status) }
          <style.OrderSubInfo2>
            { dateDisplay(saleDate) }
            { prices(totalPrice) }
          </style.OrderSubInfo2>
        </style.OrderInfoUp>
        { type === 'seller' && addressData(deliveryAddress, deliveryNumber) }
      </style.OrderInfoDiv>
    </style.OrderCardBody>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  totalPrice: PropTypes.string,
}.isRequired;

export default OrderCard;
