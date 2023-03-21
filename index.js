import express from "express";
import cors from "cors";
import Product from "./router/productRouter.js";
import "./config/mongodb_config.js";

const app = express();
const port = 3030;

app.use(cors());
app.use(Product);
app.use(express.json());

app.listen(port, (res, req) => {
  console.log("localhost:", port);
});
