const { Router } = require('express');
const userController = require('../controllers/user.controller');

const route = Router();

route.post('/register', userController.create);
route.delete('/:id', userController.deleteUsersById);

module.exports = route;