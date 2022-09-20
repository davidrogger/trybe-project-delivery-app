const { DataTypes } = require('sequelize');

module.exports = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  url_image: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}
