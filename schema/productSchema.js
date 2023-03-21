import mongoose, { Schema } from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    image: String,
    description: String,
    price: Number,
    stock: Number,
    sale: Number,
    category: String,
    spec: [Object, Object],
  },
  {
    collection: "product",
  }
);

const Product = mongoose.model("Product", ProductSchema, "product");

export default Product;
