import mongoose from "mongoose";

mongoose
  .connect(
    `mongodb+srv://uka:Mongol0318@ecomme.8qlwd64.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("connect"));

export default mongoose.connection;
