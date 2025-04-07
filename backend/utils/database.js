import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MONGO DB CONNECTION SUCCESSFUL");
  } catch (error) {
    console.log(error, "DB CONNECTION FAILED");
  }
};

export default connectDB;
