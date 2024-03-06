import mongoose, {Schema } from "mongoose";
import { TableModel } from "./tablesModel";

export interface ReservationInterface {
  full_name : string,
  email : string,
  phone : string
  date : Date,
  hour : string,
  persons: number,
  table_id: string,
}

const reservationSchema = new Schema({
  full_name: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
  date: {type: Date, required: true},
  hour: {type: String, required: true},
  persons: {type: Number, required: true},
  table_id:{type: Schema.Types.ObjectId,ref: TableModel, required: true},
})

export const ReservationModel = mongoose.model<ReservationInterface>("reservations", reservationSchema);