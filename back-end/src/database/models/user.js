const attributes = require('../migrations/userAttributes');

module.exports = (sequelize) => {
  const User = sequelize.define(
    'User',
    attributes,
    {
      timestamps: false,
      tableName: 'users'
    }
    );

  return User;
}