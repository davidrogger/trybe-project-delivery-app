import { Up } from './styles';

function OrderDetails() {
  const pedido = (pessoa, num) => {
    const t = 'customer_order_details__element-order-details-label-seller-name';
    return (<div data-testid={ t }>{`PEDIDO ${num}; P.Vend: ${pessoa}`}</div>);
  };

  const data = () => {
    const t = 'customer_order_details__element-order-details-label-order-date';
    const d = new Date();
    const today = [d.getDate(), d.getMonth() + 1, d.getFullYear()];
    return (<div data-testid={ t }>{ `${today[0]}/${today[1]}/${today[2]}` }</div>);
  };

  const status = (p) => {
    const t = `customer_order_details__element-order-details-label-delivery-status${p}`;
    return (<div data-testid={ t }>{ p }</div>);
  };

  const btnEntregue = (f) => {
    const t = 'customer_order_details__button-delivery-check';
    const txt = 'MARCAR COMO ENTREGUE';
    return (<button onClick={ () => f } data-testid={ t } type="button">{ txt }</button>);
  };

  return (
    <div>
      <div>
        <h2>Detalhe do Pedido</h2>
      </div>

      <div data-testid="customer_order_details__element-order-details-label-order-id">
        <Up>
          { pedido('Fulana Pereira', '0003') }
          { data() }
          { status('Entregue') }
          { btnEntregue() }
        </Up>
      </div>
    </div>
  );
}

export default OrderDetails;
