const cartRoutes = require('express').Router();
const cartController = require('./../controllers/cart_controller')
cartRoutes.post("/" ,cartController.addToCart);
cartRoutes.delete("/" ,cartController.removeFromCart);
cartRoutes.get("/:user" ,cartController.getCartForUser);

module.exports = cartRoutes;