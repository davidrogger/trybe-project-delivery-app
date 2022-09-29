const deliveryStatusCatalog = [
  {
    id: 1,
    userType: 'seller',
    btnText: 'PREPARAR PEDIDO',
    statusUpdate: 'Preparando',
  },
  {
    id: 2,
    userType: 'seller',
    btnText: 'SAIU PARA ENTREGAR',
    statusUpdate: 'Em Trânsito',
  },
  {
    id: 3,
    userType: 'customer',
    btnText: 'MARCAR COMO ENTREGUE',
    statusUpdate: 'Entregue',
  },
];

export default deliveryStatusCatalog;
