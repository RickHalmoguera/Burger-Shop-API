import express, {Request, Response} from "express";
import { getTables } from "../services/tablesServices";


export const tablesRouter = express.Router();

tablesRouter.get("/", async (req: Request, res: Response) => {
    const tables = await getTables()
    console.log("datos")
    res.send(tables);
});