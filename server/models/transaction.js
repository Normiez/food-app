"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      Transaction.belongsTo(models.User, { foreignKey: "userId" });
      Transaction.belongsTo(models.Product, { foreignKey: "productId" });
      Transaction.belongsTo(models.Company, { foreignKey: "companyId" });
    }
  }
  Transaction.init(
    {
      status: {
        type: DataTypes.STRING,
      },
      userId: DataTypes.INTEGER,
      detail: DataTypes.STRING,
      productId: DataTypes.INTEGER,
      companyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
