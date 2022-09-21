const attributes = require('../migrations/productAttributes');

module.exports = (sequelize) => {
  const Product = sequelize.define(
    'Product',
    attributes,
    {
      timestamps: false,
      underscore: true,
      tableName: 'products'
    }
    );

  return Product;
}