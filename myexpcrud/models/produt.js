const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  pname: String,
  pprice: Number,
  pdetails: String,
  pstock: Number,
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
