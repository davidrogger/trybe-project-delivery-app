const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const jwtService = {
  generateToken(user) {
    return jwt.sign(user, JWT_SECRET);
  },
  verify(token) {
    if (!token) throw new Error('Unauthorized');
    return jwt.verify(token, JWT_SECRET);
  },
};

module.exports = jwtService;
