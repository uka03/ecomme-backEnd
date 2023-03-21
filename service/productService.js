import Product from "../schema/productSchema.js";
import "../config/mongodb_config.js";

export async function getProducts() {
  let data = Product.find();
  return await data;
}
