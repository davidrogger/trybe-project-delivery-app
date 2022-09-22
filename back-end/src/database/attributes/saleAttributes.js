const { DataTypes, fn } = require('sequelize');

module.exports = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  userId: {
    field: 'user_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  sellerId: {
    field: 'seller_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    }
  },
  totalPrice: {
    field: 'total_price',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  deliveryAddress: {
    field: 'delivery_address',
    type: DataTypes.STRING,
  },
  deliveryNumber: {
    field: 'delivery_number',
    type: DataTypes.STRING,
    allowNull: false,
  },
  saleData: {
    field: 'sale_data',
    type: DataTypes.DATE,
    defaultValue: fn('now'),
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'PREPARANDO',
  },
}