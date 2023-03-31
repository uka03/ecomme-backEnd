import Product from "../schema/productSchema.js";

export async function getCategory() {
  let category = await Product.aggregate([
    { $group: { _id: "$category" } },
  ]).sort({ _id: 1 });

  return category;
}
