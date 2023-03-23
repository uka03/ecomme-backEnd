import express from "express";
import cors from "cors";
import Product from "./router/productRouter.js";
import "./config/mongodb_config.js";
import bodyParser from "body-parser";
import User from "./router/userRouter.js";
import Order from "./router/orderRouter.js";

const app = express();
const port = 3030;

app.use(cors());
app.use(Product);
app.use(express.json());
app.use(bodyParser.json())
app.use(User)
app.use(Order)
app.listen(port, () => {
  console.log("localhost:", port);
});
