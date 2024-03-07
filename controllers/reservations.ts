import express, {Request, Response} from "express"
import { saveReservation } from "../services/reservationsServices"


export const reservationRouter = express.Router()

reservationRouter.post('/', async (req: Request, res: Response) => {
    try {
      console.log( req.body)
      const { full_name, email, phone, date, hour, persons, table_id } = req.body
      console.log(full_name, email, phone, date, hour, persons, table_id)
      if (!full_name || !email || !phone || !date || !hour || !persons || !table_id) {
        return res.status(400).json({ error: "Please provide the require info" });
      }
  
      const reservation = await saveReservation(full_name, email, phone, new Date(date), hour, persons, table_id)

      res.json({ reservation })
    } catch (error) {
      console.error("Error creating Reservation", error);
      res.status(500).json({ error: "Opps! somethig went wrong" })
    }
  })