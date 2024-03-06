import { ReservationModel } from "../models/reservationsModel"
import { TableModel } from "../models/tablesModel"

export const findAvailableHours = async(date: Date, persons: number): Promise<{ hour: string, availableTables: string[] }[]> => {
  const availableHours = ["1:00", "2:00", "3:00", "4:00", "8:00", "9:00", "10:00", "11:00"]
  const availableHoursInfo: { hour: string, availableTables: string[] }[] = []

  for (const hour of availableHours) {
      const reservations = await ReservationModel.find({ date, hour })

      const reservedTables: string[] = reservations.map(reservation => reservation.table_id.toString())

      const allTables = await TableModel.find()

      const availableTables: string[] = []
      for (const table of allTables) {
          if (!reservedTables.includes(table._id.toString()) && table.seats >= persons) {
              availableTables.push(table._id.toString())
          }
      }

      if (availableTables.length > 0) {
          availableHoursInfo.push({ hour, availableTables });
      }
  }

  return availableHoursInfo;
}
