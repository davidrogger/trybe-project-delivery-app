const catalogErrors = {
  Unauthorized: {
    status: 401,
    message: 'User or password unauthorized.',
  },
  Conflict: {
    status: 409,
    message: 'Name or email already in use.',
  },
};

module.exports = catalogErrors;