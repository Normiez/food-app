const { Product, Company } = require("../models/index");
class ProductController {
  static async createProduct(req, res, next) {
    try {
      const { name, price, companyId } = req.body;
      const dataCompany = await Company.findOne({ where: { id: companyId } });
      if (!dataCompany)
        throw {
          name: "INVALID ID",
          message: "Company does not exist in database",
        };
      const data = await Product.create({
        name,
        price,
        status: "ready",
        companyId,
      });
      const data2 = await Product.findOne({
        include: { model: Company },
        where: { id: data.id },
      });
      res.status(201).json({
        message: `Product with name ${data.name} from ${data2.Company.name} created`,
      });
    } catch (err) {
      next(err);
    }
  }

  static async findAllProduct(req, res, next) {
    try {
      const data = await Product.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async findOneProduct(req, res, next) {
    try {
      const productId = req.params.id;
      const data = await Product.findOne({ where: { id: productId } });
      if (!data)
        throw {
          name: "INVALID ID",
          message: "Product does not exist in database",
        };
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async updateProduct(req, res, next) {
    try {
      const { name, price } = req.body;
      const productId = req.params.id;
      if (!name || !price) throw { name: "INVALID DATA" };
      const data1 = await Product.findOne({ where: { id: productId } });
      if (!data1)
        throw {
          name: "INVALID ID",
          message: "Product does not exist in database",
        };
      await Product.update({ name, price }, { where: { id: data1.id } });
      res.status(200).json({ message: "Product successfully updated" });
    } catch (err) {
      next(err);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const productId = req.params.id;
      const data = await Product.findOne({ where: { id: productId } });
      if (!data)
        throw {
          name: "INVALID ID",
          message: "Product does not exist in database",
        };
      await Product.destroy({ where: { id: data.id } });
      res.status(200).json({ message: "Product successfully deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProductController;
