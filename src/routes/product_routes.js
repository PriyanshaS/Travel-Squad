const productRoutes = require('express').Router();
const productController = require('./../controllers/product_controller')
productRoutes.post("/" ,productController.createProduct);
productRoutes.get("/" ,productController.fetchAllProducts);
productRoutes.get("/:id" , productController.fetchById);
module.exports = productRoutes;