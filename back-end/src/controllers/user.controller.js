const jwtService = require('../services/jwt.service');
const userService = require('../services/user.service');

const userController = {
  async login(req, res) {
    const { email, password } = req.body;
    const login = { email, password };
    
    const user = await userService.checkData(login);
    const token = jwtService.generateToken(user);
    res.status(200).json({ ...user, token });
  },
};

module.exports = userController;
