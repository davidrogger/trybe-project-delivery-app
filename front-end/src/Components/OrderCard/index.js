import PropTypes from 'prop-types';
import * as style from './styles';
import formatPrice from '../../utils/formatPrice';

function OrderCard({ id, status, date, totalPrice, testType = 'customer' }) {
  const testName = `${testType}_orders__`;
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
    return (<div data-testid={ test }>{s}</div>);
  };

  const dateDisplay = (d) => {
    const formatDate = new Date(d);
    const today = [
      formatDate.getDate(),
      formatDate.getMonth() + 1, formatDate.getFullYear(),
    ];
    const test = `${testName}element-order-date-${id}`;
    return (
      <div data-testid={ test }>
        {`${today[0]}/${today[1].toString().padStart(2, '0')}/${today[2]}`}
      </div>
    );
  };

  const prices = (p) => {
    const test = `${testName}element-card-price-${id}`;
    return (<div data-testid={ test }>{formatPrice(Number(p))}</div>);
  };

  return (
    <style.OrderCardBody>
      { order(id) }
      <style.OrderInfoDiv>
        <div>
          { statusDisplay(status) }
          { dateDisplay(date) }
          { prices(totalPrice) }
        </div>
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
