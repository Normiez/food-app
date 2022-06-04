const express = require("express");
const routerProduct = express.Router();
const ProductController = require("../controllers/productController");

routerProduct.post("/create", ProductController.createProduct);

module.exports = routerProduct;
