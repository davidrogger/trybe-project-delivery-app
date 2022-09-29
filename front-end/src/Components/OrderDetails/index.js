import PropTypes from 'prop-types';
import { changeOrderStatus } from '../../services/api';
import * as Style from './styles';
import Status from '../../utils/httpStatus';
import deliveryStatusCatalog from '../../utils/deliveryStatus';

function OrderDetails({
  sellerName, saleId, date, status, setsaleDetailsLoading, setReloading, reloading,
  userType }) {
  async function handleClick(statusUpdate) {
    const data = await changeOrderStatus(saleId, { status: statusUpdate });
    if (Status[data.status] === 'OK') {
      setsaleDetailsLoading(true);
      setReloading(!reloading);
    }
  }

  const testName = `${userType}_order_details__`;
  const pedido = (pessoa, num) => {
    const sellerNameTest = `${testName}element-order-details-label-seller-name`;
    const orderTest = `${testName}element-order-details-label-order-id`;
    return (
      <Style.DivPedido>
        <div>
          PEDIDO:
          <span data-testid={ orderTest }>{num}</span>
        </div>
        { userType === 'customer' && (
          <Style.SellerNameDiv>
            P. Vend:
            <span data-testid={ sellerNameTest }>{pessoa}</span>
          </Style.SellerNameDiv>
        ) }
      </Style.DivPedido>
    );
  };

  const dateDisplay = (d) => {
    const t = `${testName}element-order-details-label-order-date`;
    const formatDate = new Date(d);
    const today = [
      formatDate.getDate(), formatDate.getMonth() + 1, formatDate.getFullYear()];
    return (
      <Style.DivData>
        Data:
        <span data-testid={ t }>
          { `${today[0]}/${today[1].toString().padStart(2, '0')}/${today[2]}` }
        </span>
      </Style.DivData>
    );
  };

  const statusDisplay = (p) => {
    const t = `${testName}element-order-details-label-delivery-status`;
    return (
      <Style.DivStatus data-testid={ t }>
        Status:
        { p }
      </Style.DivStatus>
    );
  };

  const btnEntregue = () => {
    const btnDisabled = (trigger, btn) => {
      // refatorar essa logica depois...
      const transit = 'Em Trânsito';
      if (btn === 'Preparando') {
        return trigger === transit
        || trigger === 'Preparando' || trigger === 'Entregue';
      }
      if (btn === transit) {
        return trigger === 'Pendente' || trigger === 'Entregue' || trigger === transit;
      }
      return trigger === 'Pendente' || trigger === 'Preparando' || trigger === 'Entregue';
    };
    return deliveryStatusCatalog.map((delivery) => {
      const btnTestName = `${testName}button-${delivery.testTag}-check`;
      if (delivery.userType === userType) {
        return (
          <Style.Button
            key={ delivery.id }
            onClick={ () => handleClick(delivery.statusUpdate) }
            data-testid={ btnTestName }
            type="button"
            disabled={ btnDisabled(status, delivery.statusUpdate) }
          >
            { delivery.btnText }

          </Style.Button>
        );
      }
      return null;
    });
  };

  return (
    <Style.SaleDetailsDiv>
      { pedido(sellerName, saleId) }
      { dateDisplay(date) }
      { statusDisplay(status) }
      { btnEntregue() }
    </Style.SaleDetailsDiv>
  );
}

OrderDetails.propTypes = {
  sellerName: PropTypes.string,
  saleId: PropTypes.number,
  date: PropTypes.string,
  status: PropTypes.string,
}.isRequired;

export default OrderDetails;
