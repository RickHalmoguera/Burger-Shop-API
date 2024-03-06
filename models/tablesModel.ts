import mongoose, {Schema } from "mongoose";

export interface TableInterface {
  seats : number,
  is_booked: boolean
}

const tableSchema = new Schema({
  seats: {type: Number, required: true},
  is_booked: {type: Boolean, require: true}
})

export const TableModel = mongoose.model<TableInterface>("tables", tableSchema);