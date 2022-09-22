const { Router } = require('express');
const productController = require('../controllers/product.controller');

const route = Router();

route.use('/', productController.getAll);

module.exports = route;