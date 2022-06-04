"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.hasMany(models.Transaction, { foreignKey: "productId" });
      Product.belongsTo(models.Company, { foreignKey: "companyId" });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Product name is required" },
          notEmpty: { msg: "Product name is required" },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Price is required" },
          notEmpty: { msg: "Price is required" },
        },
      },
      status: {
        type: DataTypes.STRING,
      },
      companyId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  Product.beforeCreate((instance) => {
    if (!instance.status) {
      instance.status = "ready";
    }
  });
  return Product;
};
