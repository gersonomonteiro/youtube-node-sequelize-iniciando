const User = require('../models/User');

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);

    return res.json(user);
  }

  async index(req, res){
    const users = await User.findAll();

    return res.json(users);
  }
}

module.exports = new UserController();