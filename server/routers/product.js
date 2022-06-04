const express = require("express");
const routerProduct = express.Router();
const ProductController = require("../controllers/productController");

routerProduct.get("/", ProductController.findAllProduct);
routerProduct.post("/create", ProductController.createProduct);
routerProduct.put("/update/:id", ProductController.updateProduct);
routerProduct.delete("/delete/:id", ProductController.deleteProduct);
routerProduct.get("/:id", ProductController.findOneProduct);

module.exports = routerProduct;
