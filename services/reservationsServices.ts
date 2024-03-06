import { ReservationModel } from "../models/reservationsModel";
import { TableModel } from "../models/tablesModel";



export const findAvailableHours = async(date: Date, persons: number): Promise<string[]> =>{
    const availableHours = ["1:00", "2:00", "3:00", "4:00", "8:00", "9:00", "10:00", "11:00"];
    const tables = await TableModel.find({ seats: { $gte: persons }, is_booked: true });
  
    const reservations = await ReservationModel.find({ date });
    if (reservations.length === 0) {
      return availableHours;
    }
  
    const occupiedHours = reservations.map(reservation => reservation.hour);
    return availableHours.filter(hour => !occupiedHours.includes(hour));
  }
  