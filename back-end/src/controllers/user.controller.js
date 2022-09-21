const jwtService = require('../services/jwt.service');
const userService = require('../services/user.service');

const userController = {
  async login(req, res) {
    const { email, password } = req.body;
    const login = { email, password };
    
    await userService.emailExists(email);
    const user = await userService.checkPassword(login);
    const token = jwtService.generate(user);
    res.status(200).json(token);
  },
};

module.exports = userController;
