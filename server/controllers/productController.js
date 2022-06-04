const { Product } = require("../models/index");
class ProductController {
  static async createProduct(req, res, next) {
    try {
      const { name, price, companyId } = req.body;
      const data = await Product.create({
        name,
        price,
        status: "ready",
        companyId,
      });
      res
        .status(201)
        .json({ message: `Product with name ${data.name} created` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProductController;
