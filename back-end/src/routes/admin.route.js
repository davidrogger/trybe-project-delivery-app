const { Router } = require('express');
const userController = require('../controllers/user.controller');

const route = Router();

route.post('/register', userController.create);

module.exports = route;