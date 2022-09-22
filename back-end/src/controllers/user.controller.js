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
  async create(req, res) {
    const { name, email, password } = req.body;
    const newUser = { name, email, password };

    await Promise.all([
      userService.emailExists(email),
      userService.nameExists(name),
    ]);

    const user = await userService.create(newUser);
    const token = jwtService.generateToken(user);

    res.status(201).json({ ...user, token });
  },
};

module.exports = userController;
