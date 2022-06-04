const express = require("express");
const routerCompany = express.Router();
const CompanyController = require("../controllers/companyController");

routerCompany.get("/", CompanyController.findAllCompany);
routerCompany.post("/create", CompanyController.createCompany);
routerCompany.put("/update/:id", CompanyController.updateCompany);
routerCompany.delete("/delete/:id", CompanyController.deleteCompany);
routerCompany.get("/:id", CompanyController.findOneCompany);

module.exports = routerCompany;
