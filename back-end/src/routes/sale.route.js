const { Router } = require('express');
const saleController = require('../controllers/sale.controller');
const userController = require('../controllers/user.controller');

const route = Router();

route.get('/customer/:id', saleController.getOrdersByUserId);
route.get('/seller/:id', saleController.getOrdersBySellerId);
route.put('/:id', saleController.changeOrderStatus);
route.get('/:id', saleController.getSalesByOrderId);
route.post('/:userId', userController.verify, saleController.create);

module.exports = route;