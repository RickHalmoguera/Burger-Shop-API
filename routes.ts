import { Router } from "express"
import { tablesRouter } from "./controllers/tables"


const router = Router()

router.use("/api/tables", tablesRouter)

export default router