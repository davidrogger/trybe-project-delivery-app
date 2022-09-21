const { DataTypes } = require('sequelize');

module.exports = {
  sale_id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'sales',
      key: 'id',
    }
  },
  product_id: {
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