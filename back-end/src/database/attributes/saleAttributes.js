const { DataTypes, fn } = require('sequelize');

module.exports = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  seller_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    }
  },
  total_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  delivery_address: {
    type: DataTypes.STRING,
  },
  delivery_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sale_data: {
    type: DataTypes.DATE,
    defaultValue: fn('now'),
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}