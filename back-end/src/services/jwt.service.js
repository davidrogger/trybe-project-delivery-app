const jwt = require('jsonwebtoken');
require('dotenv').config();
const fs = require('fs');

const SECRET_FILE = fs.readFileSync(`${__dirname}/../../jwt.evaluation.key`);

const jwtService = {
  generateToken(user) {
    return jwt.sign(user, SECRET_FILE);
  },
};

module.exports = jwtService;
