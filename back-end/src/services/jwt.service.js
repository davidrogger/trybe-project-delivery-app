const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const jwtService = {
  generateToken(user) {
    return jwt.sign(user, JWT_SECRET);
  },
};

module.exports = jwtService;
