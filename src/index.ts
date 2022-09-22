import express from 'express'
import { router as routes } from './routes/routes'
const app = express()

app.use('/', routes)
app.use(express.json())
app.listen(4000, () => {
  console.log("🚀 Server ready at http://localhost:4000")
})