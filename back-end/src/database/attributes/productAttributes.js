const { DataTypes } = require('sequelize');

module.exports = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: false,
  },
  urlImage: {
    type: DataTypes.STRING(200),
    allowNull: false,
    field: 'url_image'
  }
}
