const { Router } = require('express');
const userController = require('../controllers/user.controller');
const adminRoute = require('./admin.route');

const route = Router();

route.post('/register', userController.create);
route.get('/sellers', userController.getAllSellers);
route.get('/:id', userController.getUserById);

route.use(userController.verify);
route.get('/', userController.getAllUsers);
route.use('/admin', adminRoute);

module.exports = route;