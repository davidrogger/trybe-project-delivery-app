const { Router } = require('express');
const userController = require('../controllers/user.controller');

const route = Router();

route.post('/', userController.create);
route.get('/:id', userController.getUserById);
route.get('/sellers', userController.getAllSellers);

module.exports = route;