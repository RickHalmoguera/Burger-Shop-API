import express, {Request, Response} from "express"
import { findAvailableHours } from "../services/reservationsServices"


export const availabilityRouter = express.Router()

availabilityRouter.post('/', async (req: Request, res: Response) => {
    try {
      const { date, persons } = req.body

      if (!date || !persons) {
        return res.status(400).json({ error: "Se requiere la fecha y el número de personas." });
      }
  
      const availableHours = await findAvailableHours(new Date(date), persons)

      res.json({ availableHours })
    } catch (error) {
      console.error("Error al consultar la disponibilidad de mesas:", error);
      res.status(500).json({ error: "Ocurrió un error al consultar la disponibilidad de mesas." })
    }
  })