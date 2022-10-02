const { Router } = require('express');
const saleController = require('../controllers/sale.controller');
const userController = require('../controllers/user.controller');

const route = Router();

route.get('/customer/:id', saleController.getOrdersByUserId);
route.get('/seller/:id', saleController.getOrdersBySellerId);
route.post('/user/:id', userController.verify, saleController.create);
route.put('/:id', saleController.changeOrderStatus);
route.get('/:id', saleController.getOrderById);

module.exports = route;