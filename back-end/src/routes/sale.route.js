const { Router } = require('express');
const saleController = require('../controllers/sale.controller');
// const userController = require('../controllers/user.controller');

const route = Router();

// route.use(userController.verify);
route.get('/:userId', saleController.getSalesByUser);
route.post('/:userId', saleController.create);

module.exports = route;