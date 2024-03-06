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

export async function getCollections() {
  try {
      const collections = await mongoose.connection.db.listCollections().toArray();
      console.log("Collections in the database:");
      collections.forEach(collection => {
          console.log(collection.name);
      });
  } catch (error) {
      console.error("Error getting collections:", error);
  }
}