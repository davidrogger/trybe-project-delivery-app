const md5 = require('md5');
const model = require('../database/models');

const userService = {
  async emailExists(email) {
    return model.User.count({ where: { email } });
  },
  async nameExists(name) {
    return model.User.count({ where: { name } });
  },
  async checkData(login) {
    const password = md5(login.password);
    const user = await model.User
      .findOne({
        where: { email: login.email, password },
        raw: true,
        attributes: { exclude: ['password'] },
      });
    
    if (!user) throw new Error('NotFound');

    return user;
  },
  async create(newUser) {
    const passwordHash = md5(newUser.password);
    const { role } = await model.User.create({ ...newUser, password: passwordHash });
    const { password, ...user } = newUser;
    return { ...user, role };
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
};

module.exports = userService;