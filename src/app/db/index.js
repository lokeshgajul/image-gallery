import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/ContactDb";

let isConnected = false;

export async function connecDb(params) {
  if (isConnected) return;

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("mongo db connected ");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw new Error("Failed to connect to MongoDB");
  }
}
