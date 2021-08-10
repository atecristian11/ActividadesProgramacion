const mongoose = require("mongoose");

const warehouseSchema = new mongoose.Schema({
  name: String,
  direction: String,
  city: String,
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const warehouse = mongoose.model("warehouse", warehouseSchema);
module.exports = warehouse;
