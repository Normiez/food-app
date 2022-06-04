const express = require("express");
const UserController = require("../controllers/userController");
const routerUser = express.Router();

routerUser.post("/register", UserController.createUser);
routerUser.post("/login", UserController.loginUser);

module.exports = routerUser;
