const express = require('express');
require('express-async-errors');

const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const swaggerFile = require('../swagger-doc.json');

const loginRoute = require('../routes/login.route');
const userRoute = require('../routes/user.route');
const productRoute = require('../routes/product.route');
const saleRoute = require('../routes/sale.route');
const errorHandler = require('../middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/images', express.static('public/images'));
app.use('/login', loginRoute);
app.use('/users', userRoute);
app.use('/products', productRoute);
app.use('/orders', saleRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(errorHandler);

module.exports = app;
