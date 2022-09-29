const { Router } = require('express');
const saleController = require('../controllers/sale.controller');
const userController = require('../controllers/user.controller');

const route = Router();

route.put('/order/:id', saleController.changeOrderStatus);
route.get('/:userId', saleController.getSalesByUser);
route.get('/seller/:id', saleController.getOrdersBySellerId);
route.get('/order/:id', saleController.getSalesByOrderId);
route.post('/:userId', userController.verify, saleController.create);

module.exports = route;