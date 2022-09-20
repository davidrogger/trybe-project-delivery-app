const { Model, STRING, INTEGER} = require('sequelize');
const db = require('.');

class User extends Model {
  id;
  name;
  email;
  password;
  role;
}

User.init(
{
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.INTEGER,
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  email: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  password: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  role: {
    allowNull: false,
    type: Sequelize.STRING,
  },
},
{
  db,
}
);

export default User;
