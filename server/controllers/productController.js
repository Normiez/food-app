class ProductController {
  static createProduct(req, res, next) {
    res.status(200).json({ message: "masuk bang" });
  }
}

module.exports = ProductController;
