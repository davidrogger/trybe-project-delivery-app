const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const jwtService = {
  generate(user) {
    return jwt.sign(user, JWT_SECRET);
  },
};

module.exports = jwtService;
