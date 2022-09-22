const md5 = require('md5');
const model = require('../database/models');

const userService = {
  async emailExists(email) {
    const user = await model.User.count({ where: { email } });
    if (user === 0) throw new Error('NotFound');
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
};

module.exports = userService;