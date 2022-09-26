const jwt = require('jsonwebtoken');
require('dotenv').config();
const fs = require('fs');

const SECRET_FILE = fs.readFileSync(`${__dirname}/../../jwt.evaluation.key`);

const jwtService = {
  generateToken(user) {
    return jwt.sign(user, SECRET_FILE);
  },
  verify(token) {
    if (!token) throw new Error('Unauthorized');
    return jwt.verify(token, SECRET_FILE);
  },
};

module.exports = jwtService;
