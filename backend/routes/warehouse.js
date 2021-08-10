const express = require("express");
const router = express.Router(); //con esta se manipulan rutas para asi acceder a las api
const WarehouseController = require("../controllers/warehouse");

//http://localhost:3816/api/role/registerProduct
router.post("/registerWarehouse", WarehouseController.registerWarehouse);

//http://localhost:3816/api/role/listProduct
router.get("/listWarehouse", WarehouseController.listWarehouse);

module.exports = router;
