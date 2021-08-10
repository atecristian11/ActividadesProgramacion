const express = require("express");
const router = express.Router(); //con esta se manipulan rutas para asi acceder a las api
const ProductController = require("../controllers/product");

//http://localhost:3816/api/role/registerProduct
router.post("/registerProduct", ProductController.registerProduct);

//http://localhost:3816/api/role/listProduct
router.get("/listProduct", ProductController.listProduct);

module.exports = router;
