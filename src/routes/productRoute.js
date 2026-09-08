const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const validate = require("../midlware/validateProduct");

router.post("/", validate, productController.createProduct);
router.get("/", productController.get);
router.get("/:id", productController.getUsingId);
router.get("/name/:name", productController.getUsingName);
router.put("/:id", validate, productController.updateById);
router.patch("/:id", productController.partialUpdateById);
router.delete("/:id", productController.deleteById);

module.exports = router;
