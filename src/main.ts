import express from "express"
import "dotenv/config"
import cors from "cors"
import router from "./routes"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/v1", router)

const port: number = Number(process.env.PORT)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
