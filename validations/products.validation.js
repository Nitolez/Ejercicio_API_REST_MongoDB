const { body } = require("express-validator");
const productsDataValidateChainMethod = [
    body("id")
        .exists()
        .withMessage("ID is required")
        .isString()
        .withMessage("ID should be string"),
    body("title").exists().isString().withMessage("Provide valid title"),
    body("description")
        .exists()
        .isString()
        .withMessage("Description should be string"),
    body("provider")
    .exists()
    .isString()
    .withMessage("Description should be string")
];

module.exports = {
    productsDataValidateChainMethod
  };
  