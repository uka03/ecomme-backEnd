import UserModel from "../schema/userSchema.js";



export async function getUser() {

    let users = UserModel.find()
    return await users
}


export async function deleteUser(id) {
    let result = UserModel.deleteOne({ _id: id })
    console.log(id)
    return result
}