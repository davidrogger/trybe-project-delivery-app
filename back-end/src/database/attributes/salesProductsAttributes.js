const { DataTypes } = require('sequelize');

module.exports = {
  saleId: {
    field: 'sale_id',
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'sales',
      key: 'id',
    }
  },
  productId: {
    field: 'product_id',
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'products',
      key: 'id',
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}