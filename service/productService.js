import Product from "../schema/productSchema.js";
import "../config/mongodb_config.js";

export async function getProducts() {
  let data = Product.find();
  return await data;
}

export async function updateProduct({ id, data }) {
  let result = Product.updateOne({ _id: id }, { $set: { data } })
  console.log(id, data)
  return await result
}

export async function deleteProducts(id) {
  let result = Product.deleteOne({ _id: id })
  return await result
}


