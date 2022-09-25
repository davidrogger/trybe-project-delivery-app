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
      as: 'products',
      through: SalesProduct,
      foreignKey: 'saleId',
      other: 'productId',
    });
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'productId',
      other: 'saleId',
    })
  }

  return SalesProduct;
}