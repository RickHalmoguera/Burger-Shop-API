import express from "express"
import { connectToDb, getCollections } from "./connectToDb"
import router from "./routes"
var cors = require('cors')
const corsOptions = {
    origin: '*', 
    methods: 'GET,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200,
    allowedHeaders: 'Content-Type,Authorization', 
  };


const app = express()
app.use(cors(corsOptions))

app.use(express.json())
connectToDb()

app.use(router)



export default app
