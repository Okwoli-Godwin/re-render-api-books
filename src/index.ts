import express, { Application, Request, Response } from "express"
const port: number | string = process.env.port || 2022
const app: Application = express()
import cors from "cors"
app.use(express.json())
import router from "../Router/bookstoreRouter"
require("../config/db")

const allowedOrigins = ["http://localhost:3000"]

app.use(cors({origin: "*"}))

app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Server is running fine"
    })
})

app.use("/server",router)

app.listen(port, () => {
    console.log("Server is up and running")
})