import PropTypes from 'prop-types';

function OrderCard({ id, status, date, totalPrice }) {
  const order = (num) => {
    const test = `customer_orders__element-order-id-${id}`;
    return (<div data-testid={ test }>{`PEDIDO ${num}`}</div>);
  };

  const statusDisplay = (s) => {
    const test = `customer_orders__element-delivery-status-${id}`;
    return (<div data-testid={ test }>{s}</div>);
  };

  const dateDisplay = (d) => {
    const formatDate = new Date(d);
    const today = [
      formatDate.getDate(),
      formatDate.getMonth() + 1, formatDate.getFullYear(),
    ];
    const test = `customer_orders__element-order-date-${id}`;
    return (
      <div data-testid={ test }>
        {`${today[0]}/${today[1].toString().padStart(2, '0')}/${today[2]}`}
      </div>
    );
  };

  const prices = (p) => {
    const test = `customer_orders__element-card-price-${id}`;
    return (<div data-testid={ test }>{p}</div>);
  };

  return (
    <div>
      { order(id) }
      { statusDisplay(status) }
      { dateDisplay(date) }
      { prices(totalPrice) }
    </div>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  totalPrice: PropTypes.string,
}.isRequired;

export default OrderCard;
