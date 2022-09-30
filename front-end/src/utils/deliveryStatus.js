const deliveryStatusCatalog = [
  {
    id: 1,
    label: 'preparing',
    userType: 'seller',
    btnText: 'PREPARAR PEDIDO',
    statusUpdate: 'Preparando',
  },
  {
    id: 2,
    userType: 'seller',
    btnText: 'SAIU PARA ENTREGAR',
    statusUpdate: 'Em Trânsito',
    label: 'dispatch',
  },
  {
    id: 3,
    userType: 'customer',
    btnText: 'MARCAR COMO ENTREGUE',
    statusUpdate: 'Entregue',
    label: 'delivery',
  },
];

export default deliveryStatusCatalog;
