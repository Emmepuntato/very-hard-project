const express = require('express')
require('dotenv').config()
const cors = require('cors')

const connectDB = require('./server/connect')

const app = express()
const PORT = process.env.PORT || 4500
const MONGO_URI = process.env.MONGO_URI
const employeesRouter = require('./routes/employees')
const veggieRouter = require('./routes/veggie')

app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.get('/', ({ req, res }) => {
  res.send('hi emme, from front-end \n yes, its me')
})

app.use('/api', employeesRouter)
app.use('/vegetables', veggieRouter)

const startServer = async () => {
  try {
    await connectDB(MONGO_URI)
    app.listen(PORT, () => {
      console.log(
        `server connected to MongoDB and listening on http://localhost:${PORT}`
      )
    })
  } catch (err) {
    console.log(err)
  }
}

startServer()
