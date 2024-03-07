import { Router } from "express"
import { tablesRouter } from "./controllers/tables"
import { availabilityRouter } from "./controllers/availability"
import { reservationRouter } from "./controllers/reservations"


const router = Router()

router.use("/api/tables", tablesRouter)
router.use("/api/availability",availabilityRouter)
router.use("/api/reservation",reservationRouter)

export default router