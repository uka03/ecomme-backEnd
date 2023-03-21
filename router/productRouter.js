import express from "express";
import { getProducts } from "../service/productService.js";

const Product = express.Router();

Product.get("/product", async (res, req) => {
  let data = await getProducts();
  console.log("this is data", data);
});

export default Product;
