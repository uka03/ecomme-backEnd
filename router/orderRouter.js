import express from "express";
import { getOrder } from "../service/orderService.js";


const Order = express.Router()


Order.get("/order", async (req, res) => {
    let result = await getOrder()
    res.status(200).send(result)
})

export default Order