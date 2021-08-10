const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const Product = require("./routes/product");
const Warehouse = require("./routes/warehouse");
require("dotenv").config();

const cad = express();

cad.use(express.json());
cad.use(cors());
cad.use("/api/product", Product);
cad.use("/api/warehouse", Warehouse);

cad.listen(process.env.PORT, () =>
  console.log("Backen server running OK, on port: ", process.env.PORT)
);

dbConnection();
