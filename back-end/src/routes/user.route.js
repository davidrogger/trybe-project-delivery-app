const { Router } = require('express');
const userController = require('../controllers/user.controller');

const route = Router();

route.get('/sellers', userController.getAllSellers);
route.post('/', userController.create);
route.get('/:id', userController.getUserById);

module.exports = route;