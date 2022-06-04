"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      Company.hasMany(models.Transaction, { foreignKey: "companyId" });
      Company.hasMany(models.Product, { foreignKey: "companyId" });
    }
  }
  Company.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Company name is required" },
          notEmpty: { msg: "Company name is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "Company",
    }
  );
  return Company;
};
