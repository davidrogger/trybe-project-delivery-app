const { Router } = require('express');
const userController = require('../controllers/user.controller');

const route = Router();

route.post('/register', userController.create);
route.get('/sellers', userController.getAllSellers);
route.get('/:id', userController.getUserById);

route.use(userController.verify);
route.get('/', userController.getAllUsers);
route.delete('/:id', userController.deleteUsersById);
route.post('/admin/register', userController.create);

module.exports = route;