const attributes = require('../attributes/saleAttributes');

module.exports = (sequelize) => {
  const Sale = sequelize.define(
    'Sale',
    attributes,
    {
      timestamps: false,
      tableName: 'sales'
    }
    );

  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
        { foreignKey: 'userId', as: 'customer' }
      );
    Sale.belongsTo(models.User,
      { foreignKey: 'sellerId', as: 'seller' }
    );
  }

  return Sale;
}
