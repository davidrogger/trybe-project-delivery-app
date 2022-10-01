const { Router } = require('express');
const userController = require('../controllers/user.controller');

const route = Router();

route.post('/register', userController.create);
route.post('/admin/register', userController.verify, userController.createByAdmin);
route.get('/sellers', userController.getAllSellers);
route.get('/admin', userController.verify, userController.getAllUsers);
route.get('/:id', userController.getUserById);

module.exports = route;