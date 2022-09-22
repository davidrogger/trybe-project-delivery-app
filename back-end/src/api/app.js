const express = require('express');
require('express-async-errors');

const cors = require('cors');

const loginRoute = require('../routes/login.route');
const errorHandler = require('../middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', loginRoute);

app.use(errorHandler);

module.exports = app;
