import { Router } from "express"
import { tablesRouter } from "./controllers/tables"
import { availabilityRouter } from "./controllers/availability"


const router = Router()

router.use("/api/tables", tablesRouter)
router.use("/api/availability",availabilityRouter)

export default router