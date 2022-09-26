const { Router } = require('express');
const productController = require('../controllers/product.controller');
const userController = require('../controllers/user.controller');

const route = Router();

route.use(userController.verify);
route.get('/', productController.getAll);

module.exports = route;