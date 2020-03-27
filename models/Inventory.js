const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  itemName: { type: String, required: true },
  modelNumber: { type: String, required: true },
  onHandQuantity: { type: String, required: true },
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
