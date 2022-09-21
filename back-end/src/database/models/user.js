const attributes = require('../migrations/userAttributes');

module.exports = (sequelize) => {
  const User = sequelize.define(
    'User',
    attributes,
    {
      timestamps: false,
      underscore: true,
      tableName: 'users'
    }
    );

  return User;
}