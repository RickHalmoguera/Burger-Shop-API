import express, {Request, Response} from "express"
import { findAvailableHours } from "../services/availabilityServices"


export const availabilityRouter = express.Router()

availabilityRouter.post('/', async (req: Request, res: Response) => {
    try {
      const { date, persons } = req.body

      if (!date || !persons) {
        return res.status(400).json({ error: "Plese provide the require info" });
      }
  
      const availableHours = await findAvailableHours(new Date(date), persons)

      res.json({ availableHours })
    } catch (error) {
      console.error("Error fetching the hours:", error);
      res.status(500).json({ error: "Opps! somethig went wrong" })
    }
  })