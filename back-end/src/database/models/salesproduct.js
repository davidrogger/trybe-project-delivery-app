const attributes = require('../attributes/salesProductsAttributes');

module.exports = (sequelize) => {
  const SalesProduct = sequelize.define(
    'SalesProduct',
    attributes,
    {
      timestamps: false,
      tableName: 'sales_products'
    }
    );

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'sale_id',
      other: 'product_id',
    });
    models.Product.belongsToMany(models.Sale, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'product_id',
      other: 'sale_id',
    })
  }

  return SalesProduct;
}