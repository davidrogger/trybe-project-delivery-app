import PropTypes from 'prop-types';
import { SaleDetailsDiv } from './styles';

function OrderDetails({ sellerName, saleId, date, status }) {
  const pedido = (pessoa, num) => {
    const t = 'customer_order_details__element-order-details-label-seller-name';
    return (<div data-testid={ t }>{`PEDIDO ${num}; P.Vend: ${pessoa}`}</div>);
  };

  const dateDisplay = (d) => {
    const t = 'customer_order_details__element-order-details-label-order-date';
    const formatDate = new Date(d);
    const today = [
      formatDate.getDate(), formatDate.getMonth() + 1, formatDate.getFullYear()];
    return (<div data-testid={ t }>{ `${today[0]}/${today[1]}/${today[2]}` }</div>);
  };

  const statusDisplay = (p) => {
    const t = `customer_order_details__element-order-details-label-delivery-status${p}`;
    return (<div data-testid={ t }>{ p }</div>);
  };

  const btnEntregue = (f) => {
    const t = 'customer_order_details__button-delivery-check';
    const txt = 'MARCAR COMO ENTREGUE';
    return (<button onClick={ () => f } data-testid={ t } type="button">{ txt }</button>);
  };

  return (

    <SaleDetailsDiv>
      { pedido(sellerName, saleId) }
      { dateDisplay(date) }
      { statusDisplay(status) }
      { btnEntregue() }
    </SaleDetailsDiv>

  );
}

OrderDetails.propTypes = {
  sellerName: PropTypes.string,
  saleId: PropTypes.number,
  date: PropTypes.string,
  status: PropTypes.string,
}.isRequired;

export default OrderDetails;
