const attributes = require('../migrations/saleAttributes');

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

  return Sale;
}
