const { Router } = require('express');
const saleController = require('../controllers/sale.controller');

const route = Router();

route.get('/:userId', saleController.getSalesByUser);

module.exports = route;