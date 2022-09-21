const attributes = require('../attributes/saleAttributes');

module.exports = (sequelize) => {
  const Sale = sequelize.define(
    'Sale',
    attributes,
    {
      timestamps: false,
      underscore: true,
      tableName: 'sales'
    }
    );

  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
        { foreignKey: 'user_id', as: 'customer' }
      );
    Sale.belongsTo(models.User,
      { foreignKey: 'seller_id', as: 'seller' }
    );
  }

  return Sale;
}
