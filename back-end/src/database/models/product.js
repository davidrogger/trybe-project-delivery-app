const attributes = require('../attributes/productAttributes');

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