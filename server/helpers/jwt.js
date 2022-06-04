const jwt = require("jsonwebtoken");
const key = process.env.SECRET_KEY;
const checkToken = (token) => {
  return jwt.verify(token, key);
};
const signToken = (payload) => {
  return jwt.sign(payload, key);
};

module.exports = { checkToken, signToken };
