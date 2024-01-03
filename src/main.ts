import express from "express"
import "dotenv/config"
import postsRoutes from './routes/posts'
import commentsRoutes from './routes/comments'

const app = express()
const prefix = "/api/v1"

app.use(express.json())

app.use(prefix, postsRoutes)
app.use(prefix, commentsRoutes)

const port: number = Number(process.env.PORT)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
