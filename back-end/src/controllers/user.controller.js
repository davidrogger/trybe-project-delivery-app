const jwtService = require('../services/jwt.service');
const userService = require('../services/user.service');

const userController = {
  async login(req, res) {
    const { email, password } = req.body;
    const login = { email, password };
    
    const user = await userService.authentication(login);
    const token = jwtService.generateToken(user);
    res.status(200).json({ ...user, token });
  },

  async create(req, res) {
    const { name, email, password, role } = req.body;
    const newUser = { name, email, password, role };

    await Promise.all([
      userService.emailExists(email),
      userService.nameExists(name),
    ]);

    const user = await userService.create(newUser);
    const token = jwtService.generateToken(user);

    res.status(201).json({ ...user, token });
  },

  async getAllUsers(req, res) {
    const userList = await userService.getAllUsers();
    res.status(200).json(userList);
  },

  async verify(req, _res, next) {
    const { authorization } = req.headers;
    const user = jwtService.verify(authorization);
    req.session = { user };
    next();
  },

  async getAllSellers(_req, res) {
    const sellers = await userService.getAllSellers();
    res.status(200).json(sellers);
  },

  async getUserById(req, res) {
    const { id } = req.params;
    const user = await userService.getUserById(Number(id));
    res.status(200).json(user);
  },

  async deleteUsersById(req, res) {
    const { id } = req.params;
    await userService.deleteUsersById(Number(id));
    res.status(204).end();
  },
};

module.exports = userController;
