const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const {
  getProducts,
  getProductId,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");

router.get("/", getProducts);

// Find product by iD
router.get("/:id", getProductId);

// Add product in dB
router.post("/", addProduct);

// Update an existing product
router.put("/:id", updateProduct);

// Delete a product from dB.
router.delete("/:id", deleteProduct);

module.exports = router;
