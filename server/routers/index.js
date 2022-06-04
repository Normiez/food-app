const express = require("express");
const router = express.Router();
const routerUser = require("./user");
const routerCompany = require("./company");
const routerProduct = require("./product");
const routerTransaction = require("./transaction");

router.use("/users", routerUser);
router.use("/companies", routerCompany);
router.use("/products", routerProduct);
router.use("/transactions", routerTransaction);

module.exports = router;
