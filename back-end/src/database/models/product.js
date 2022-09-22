const attributes = require('../attributes/productAttributes');

module.exports = (sequelize) => {
  const Product = sequelize.define(
    'Product',
    attributes,
    {
      timestamps: false,
      tableName: 'products'
    }
    );

  return Product;
}