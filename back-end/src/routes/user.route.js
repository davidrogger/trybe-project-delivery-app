const { Router } = require('express');
const userController = require('../controllers/user.controller');

const route = Router();

route.use('/', userController.create);

module.exports = route;