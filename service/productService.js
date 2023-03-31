import Product from "../schema/productSchema.js";
import "../config/mongodb_config.js";

export async function getProducts(query) {
  let { limit, filter, id } = query;

  if (filter) {
    let data = Product.find({ category: filter }).limit(limit);
    return await data;
  } else {
    let data = Product.find({}).limit(limit);
    return await data;
  }
}
export async function getProduct(query) {
  let data = await Product.findOne({ _id: query.id });
  return data;
}

export async function updateProduct({ id, data }) {
  let result = Product.updateOne({ _id: id }, { $set: { ...data } });
  console.log(id, data);
  return await result;
}

export async function addProduct(object) {
  let result = Product.insertMany({ ...object });
  return await result;
}

export async function deleteProducts(id) {
  let result = Product.deleteOne({ _id: id });
  return await result;
}
