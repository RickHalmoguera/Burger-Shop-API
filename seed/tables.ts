import mongoose from "mongoose";
import { connectToDb } from "../connectToDb";
import { TableModel } from "../models/tablesModel";

export async function seedDB() {
    try {
        await connectToDb()
        console.log("Connected correctly to server");

        await TableModel.collection.drop();
        console.log("Tables deleted successfully");

            for (let y = 0 ; y < 10; y++){
                const document = new TableModel({
                    seats : 2
                })
                console.log(document)
                await document.save();
            }

            for (let y = 0 ; y < 2; y++){
                const document = new TableModel({
                    seats : 4
                })
                await document.save();
            }

            for (let y = 0 ; y < 2; y++){
                const document = new TableModel({
                    seats : 6
                })
                await document.save();
            }

    } catch (err) {
        console.log(err);
    } finally {
        await mongoose.disconnect();
    }
}

seedDB()
