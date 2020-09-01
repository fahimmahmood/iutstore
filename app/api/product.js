const express = require("express");

const productController = require("./../controllers/productController");

const router = express.Router();

router
  .route("/")
  .get(productController.getProducts)
  .post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getProductById)
  .patch(productController.updateProductById)
  .delete(productController.deleteProductById);

module.exports = router;