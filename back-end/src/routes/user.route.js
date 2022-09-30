const { Router } = require('express');
const userController = require('../controllers/user.controller');

const route = Router();

route.post('/register', userController.create);
route.get('/sellers', userController.getAllSellers);
route.get('/:id', userController.getUserById);

module.exports = route;