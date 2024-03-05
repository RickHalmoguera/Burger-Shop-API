import mongoose, {Schema } from "mongoose";

export interface TableInterface {
  seats : number,
}

const tableSchema = new Schema({
  seats: {type: Number, required: true},
})

export const TableModel = mongoose.model<TableInterface>("tables", tableSchema);