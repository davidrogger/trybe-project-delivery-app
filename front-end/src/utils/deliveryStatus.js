const deliveryStatusCatalog = [
  {
    id: 1,
    userType: 'seller',
    btnText: 'PREPARAR PEDIDO',
    statusUpdate: 'Preparando',
    testTag: 'preparing',
  },
  {
    id: 2,
    userType: 'seller',
    btnText: 'SAIU PARA ENTREGAR',
    statusUpdate: 'Em Trânsito',
    testTag: 'dispatch',
  },
  {
    id: 3,
    userType: 'customer',
    btnText: 'MARCAR COMO ENTREGUE',
    statusUpdate: 'Entregue',
    testTag: 'delivery',
  },
];

export default deliveryStatusCatalog;
