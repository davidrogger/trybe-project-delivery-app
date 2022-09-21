const model = require('../database/models');

const userService = {
  async emailExists(email) {
    const user = await model.User.count({ where: { email } });
    if (user === 0) throw new Error('NotFound');
  },
  async checkPassword(login) {
    const userData = await model.User.findOne({ email: login.mail });
    
    // cripto test
    // if ( ) throw new Error('InvalidPassword');

    const { password, ...user } = userData;
    return user;
  },
};

module.exports = userService;