const { Company } = require("../models/index");
class CompanyController {
  static async createCompany(req, res, next) {
    try {
      const { name } = req.body;
      const data = await Company.create({ name });
      res
        .status(201)
        .json({ message: `Company with name ${data.name} created` });
    } catch (err) {
      next(err);
    }
  }

  static async findAllCompany(req, res, next) {
    try {
      const data = await Company.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async updateCompany(req, res, next) {
    try {
      const { name } = req.body;
      const companyId = req.params.id;
      if (!name || !companyId) throw { name: "INVALID DATA" };
      const data = await Company.findOne({ where: { id: companyId } });
      if (!data)
        throw {
          name: "INVALID ID",
          message: "Company does not exist in database",
        };
      await Company.update({ name }, { where: { id: companyId } });
      res.status(200).json({ message: "Company successfully updated" });
    } catch (err) {
      next(err);
    }
  }

  static async deleteCompany(req, res, next) {
    try {
      const companyId = req.params.id;
      const data = await Company.findOne({ where: { id: companyId } });
      if (!data)
        throw {
          name: "INVALID ID",
          message: "Company does not exist in database",
        };
      await Company.destroy({ where: { id: data.id } });
      res.status(200).json({ message: "Company successfully deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CompanyController;
