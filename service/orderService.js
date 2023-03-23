import OrderModel from "../schema/orderSchema.js";

export async function getOrder() {
    let orders = OrderModel.find();
    return await orders
}

