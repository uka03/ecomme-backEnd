import express from "express";
import { getCategory } from "../service/otherService.js";

const Other = express.Router();

Other.use(express.json());

Other.get("/category", async (req, res) => {
  let result = await getCategory();

  res.status(200).send(result);
});

export default Other;
