const { User } = require("../models/index");
const { signToken } = require("../helpers/jwt");
const { comparePw } = require("../helpers/bcrypt");
class UserController {
  static async createUser(req, res, next) {
    try {
      const { name, email, password, role } = req.body;
      await User.create({ name, email, password, role });
      res.status(201).json({ message: "User created" });
    } catch (err) {
      next(err);
    }
  }
  static async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw { name: "INVALID LOGIN" };
      const data = await User.findOne({ where: { email } });
      if (!data || !comparePw(password, data.password))
        throw { name: "INVALID LOGIN" };
      const token = signToken({
        name: data.name,
        email: data.email,
        role: data.role,
      });
      res.status(200).json({
        access_token: token,
        name: data.name,
        email: data.email,
        role: data.role,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
