import express from "express";
import { deleteUser, getUser } from "../service/userService.js";


const User = express.Router();

User.use(express.json())

User.get("/user", async (req, res) => {
    let result = await getUser()

    res.status(200).send(result)
})

User.delete("/user/:_id", async (req, res) => {
    let id = req.params._id
    let result = await deleteUser(id)
    res.send(result).status(200)
    console.log("delete is working")
})

export default User