const catalogErrors = require('../errors/errorsCatalog');

module.exports = (err, _req, res, _next) => {
  const { message: errorMessage } = err;

  const { status, message } = catalogErrors[errorMessage] || { status: 500, message: errorMessage };

  res.status(status).json({ message });
};