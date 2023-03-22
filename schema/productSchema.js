import mongoose, { Schema } from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    image: String,
    description: String,
    price: String,
    stock: String,
    sale: String,
    category: String,
    spec: [Object, Object],
  },
  {
    collection: "product",
  }
);

const Product = mongoose.model("Product", ProductSchema, "product");

export default Product;
