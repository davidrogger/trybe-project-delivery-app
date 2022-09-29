import PropTypes from 'prop-types';
import { changeOrderStatus } from '../../services/api';
import { SaleDetailsDiv } from './styles';
import Status from '../../utils/httpStatus';

function OrderDetails({
  sellerName, saleId, date, status, setsaleDetailsLoading, setReloading, reloading }) {
  async function handleClick() {
    const data = await changeOrderStatus(saleId, { status: 'Entregue' });
    if (Status[data.status] === 'OK') {
      setsaleDetailsLoading(true);
      setReloading(!reloading);
    }
  }

  const testName = 'customer_order_details__';
  const pedido = (pessoa, num) => {
    const sellerNameTest = `${testName}element-order-details-label-seller-name`;
    const orderTest = `${testName}element-order-details-label-order-id`;
    return (
      <div>
        PEDIDO:
        <span data-testid={ sellerNameTest }>{num}</span>
        P.Vend:
        <span data-testid={ orderTest }>{pessoa}</span>
      </div>
    );
  };

  const dateDisplay = (d) => {
    const t = `${testName}element-order-details-label-order-date`;
    const formatDate = new Date(d);
    const today = [
      formatDate.getDate(), formatDate.getMonth() + 1, formatDate.getFullYear()];
    return (
      <div data-testid={ t }>
        { `${today[0]}/${today[1].toString().padStart(2, '0')}/${today[2]}` }
      </div>
    );
  };

  const statusDisplay = (p) => {
    const t = `${testName}element-order-details-label-delivery-status`;
    return (<div data-testid={ t }>{ p }</div>);
  };

  const btnEntregue = () => {
    const t = `${testName}button-delivery-check`;
    const txt = 'MARCAR COMO ENTREGUE';
    return (
      <button
        onClick={ handleClick }
        data-testid={ t }
        type="button"
        disabled={ status === 'Entregue' }
      >
        { txt }

      </button>
    );
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
