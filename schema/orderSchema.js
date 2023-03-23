import mongoose from "mongoose";


const orderSchema = new mongoose.Schema(
    {
        totalPrice: Number,
        date: String,
        userId: String,
        status: Boolean,
        products: [Object],
        pay: Number,


    }
    ,
    {
        collection: "user"
    }
)

const OrderModel = mongoose.model("order", orderSchema, "order")

export default OrderModel