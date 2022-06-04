const bcrypt = require("bcrypt");

const hashPw = (password) => {
  return bcrypt.hashSync(password, 10);
};

const comparePw = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};

module.exports = {hashPw, comparePw}