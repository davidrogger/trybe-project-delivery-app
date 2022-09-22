const express = require('express');
require('express-async-errors');

const cors = require('cors');

const loginRoute = require('../routes/login.route');
const userRoute = require('../routes/user.route');
const productRoute = require('../routes/product.route');
const errorHandler = require('../middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/login', loginRoute);
app.use('/users', userRoute);
app.use('/products', [productRoute]);

app.use(errorHandler);

module.exports = app;
