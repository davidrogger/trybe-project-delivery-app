const attributes = require('../migrations/saleAttributes');

module.exports = (sequelize) => {
  const Sale = sequelize.define(
    'Sale',
    attributes,
    {
      timestamps: false,
      tableName: 'sales'
    }
    );

  return Sale;
}
