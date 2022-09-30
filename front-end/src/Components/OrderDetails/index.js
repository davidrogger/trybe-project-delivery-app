import PropTypes from 'prop-types';
import { changeOrderStatus } from '../../services/api';
import { SaleDetailsDiv } from './styles';
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
      <div>
        <div>
          PEDIDO:
          <span data-testid={ orderTest }>{num}</span>
        </div>
        { userType === 'customer' && (
          <div>
            P.Vend:
            <span data-testid={ sellerNameTest }>{pessoa}</span>
          </div>
        ) }
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
    const btnDisabled = (trigger, btn) => {
      const btnAbleList = {
        preparing: 'Pendente',
        dispatch: 'Preparando',
        delivery: 'Em Trânsito',
      };

      return trigger !== btnAbleList[btn];
    };
    return deliveryStatusCatalog.map((button) => {
      const btnTestName = `${testName}button-${button.label}-check`;
      if (button.userType === userType) {
        return (
          <button
            key={ button.id }
            onClick={ () => handleClick(button.statusUpdate) }
            data-testid={ btnTestName }
            type="button"
            disabled={ btnDisabled(status, button.label) }
          >
            { button.btnText }

          </button>
        );
      }
      return null;
    });
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
