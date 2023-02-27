const { Router } = require('express');
const productController = require('../controllers/product.controller');
// const userController = require('../controllers/user.controller');

const route = Router();

route.get('/', productController.getAll);

module.exports = route;