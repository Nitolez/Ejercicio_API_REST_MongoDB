const { body } = require("express-validator");
 
const providersDataValidateChainMethod = [
  body("company_name")
    .exists()
    .withMessage("company_name is required")
    .isString()
    .withMessage("company_name should be string"),
  body("CIF")
    .exists()
    .withMessage("CIF is required")
    .isString()
    .withMessage("CIF should be string"),
  body("address")
    .isString()
    .withMessage("Adress should be string"),
  body("url_web")
    .isString()
    .withMessage("URL should be a string"),
];


module.exports = { providersDataValidateChainMethod }