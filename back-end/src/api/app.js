const express = require('express');

const loginRoute = require('../routes/login.route');

const app = express();
app.use(express.json());

app.post('/login', loginRoute);

module.exports = app;
