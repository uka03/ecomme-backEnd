import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        /**    "password": "12345678",
    "email": "ukayura2004@gmail.com",
    "last_name": "yura",
    "first_name": "uka",
    "phone_number": "80977331",
    "address": "",
    "date": "2023/02/07",
    "id": "151d" */
        date: Date,
        email: String,
        password: String,
        last_name: String,
        first_name: String,
        phone_number: String,
        address: String,
    },
    {
        collection: "user"
    }
)

const UserModel = mongoose.model("user", userSchema, "user")

export default UserModel;