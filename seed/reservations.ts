import mongoose from "mongoose";
import { connectToDb } from "../connectToDb";
import { ReservationModel } from "../models/reservationsModel";

export async function seedDB() {
    try {
        await connectToDb()
        console.log("Connected correctly to server");

        await ReservationModel.collection.drop();
        console.log("Tables deleted successfully");

         
        let document = new ReservationModel({
            "full_name": "Ricardo",
            "email": "halmoguerar@gmail.com",
            "phone": "650258266",
            "date": "2024-02-02",
            "hour": "1:00",
            "persons": 6,
            "table_id": "65e888c4218fc37240abe62e"
        })
        
        
        await document.save();

        document = new ReservationModel({
            "full_name": "Juan",
            "email": "halmoguerar@gmail.com",
            "phone": "650258266",
            "date": "2024-02-02",
            "hour": "1:00",
            "persons": 6,
            "table_id": "65e888c4218fc37240abe630"
        })

        await document.save();

    } catch (err) {
        console.log(err);
    } finally {
        await mongoose.disconnect();
    }
}

seedDB()
