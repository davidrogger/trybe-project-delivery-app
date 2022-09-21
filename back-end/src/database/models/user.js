const attributes = require('../attributes/userAttributes');

module.exports = (sequelize) => {
  const User = sequelize.define(
    'User',
    attributes,
    {
      timestamps: false,
      underscore: true,
      tableName: 'users',
    }
    );

    User.associate = (models) => {
      User.hasMany(models.Sale,
          { foreignKey: 'user_id', as: 'customer_sales' }
        );
      User.hasMany(models.Sale,
          { foreignKey: 'seller_id', as: 'seller_sales' }
        )
    }

  return User;
}