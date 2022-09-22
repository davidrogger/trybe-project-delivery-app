const md5 = require('md5');
const model = require('../database/models');

const userService = {
  async emailExists(email) {
    const user = await model.User.count({ where: { email } });
    if (user === 0) throw new Error('NotFound');
  },
  async checkPassword(login) {
    const userData = await model.User
      .findOne({
        where: { email: login.email },
        raw: true,
        attributes: { exclude: ['id'] },
      });

    const passHashed = md5(login.password);
    
    if (passHashed !== userData.password) throw new Error('InvalidPassword');

    const { password, ...user } = userData; //
    return user;
  },
};

module.exports = userService;