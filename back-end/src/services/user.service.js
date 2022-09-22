const md5 = require('md5');
const model = require('../database/models');

const userService = {
  async emailExists(email) {
    const user = await model.User.count({ where: { email } });
    if (user !== 0) throw new Error('Conflict');
  },
  async nameExists(name) {
    const user = await model.User.count({ where: { name } });
    if (user !== 0) throw new Error('Conflict');
  },
  async checkData(login) {
    const password = md5(login.password);
    const user = await model.User
      .findOne({
        where: { email: login.email, password },
        raw: true,
        attributes: { exclude: ['id', 'password'] },
      });
    
    if (!user) throw new Error('Unauthorized');

    return user;
  },
  async create(newUser) {
    const passwordHash = md5(newUser.password);
    const { role } = await model.User.create({ ...newUser, password: passwordHash });
    const { password, ...user } = newUser;
    return { ...user, role };
  },
};

module.exports = userService;