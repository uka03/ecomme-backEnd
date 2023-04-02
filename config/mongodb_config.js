import mongoose from "mongoose";

try {
  mongoose.connect(
    `mongodb+srv://uka:Mongol0318@ecomme.8qlwd64.mongodb.net/ecomme`
  );
  console.log("connected");
} catch (error) {
  console.log("not connected");
}

export default mongoose.connection;
