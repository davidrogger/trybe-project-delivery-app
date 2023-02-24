const md5 = require('md5');
const model = require('../database/models');

const userService = {
  async emailExists(email) {
    const emailFound = await model.User.count({ where: { email } });
    if (emailFound === 1) throw new Error('Conflict');
  },
  async nameExists(name) {
    const nameFound = await model.User.count({ where: { name } });
    if (nameFound === 1) throw new Error('Conflict');
  },
  async authentication(login) {
    const password = md5(login.password);
    const user = await model.User
      .findOne({
        where: { email: login.email, password },
        raw: true,
        attributes: { exclude: ['password'] },
      });
    
    if (!user) throw new Error('Unauthorized');

    return user;
  },
  async create(newUser) {
    const passwordHash = md5(newUser.password);
    const { role, id } = await model.User.create({ ...newUser, password: passwordHash });
    const { password, ...user } = newUser;
    return { id, ...user, role };
  },
  async getAllUsers() {
    const users = await model.User.findAll({
      attributes: ['id', 'name', 'email', 'role'],
    });
    return users;
  },
  async getAllSellers() {
    return model.User.findAll({
      where: { role: 'seller' },
      attributes: ['id', 'name', 'email'],
    });
  },

  async getUserById(id) {
    return model.User.findOne({
      where: { id },
      attributes: ['id', 'name', 'email'],
    });
  },
  async deleteUsersById(id) {
    return model.User.destroy({
      where: { id },
    });
  },
};

module.exports = userService;