import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();

const mongo_url = process.env.MONGO_URL;

export async function connectToDb() {
    try {
        await mongoose.connect(`${mongo_url}`, {
         
        });
    } catch (error) {
      console.error(error);
      return null;
    }
}