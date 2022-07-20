const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 4500
const employeesRouter = require('./routes/employees')

app.use(cors())

app.get('/', ({ req, res }) => {
  res.json('hi emme, from front-end \n yes, its me')
})

app.use('/api', employeesRouter)

app.listen(PORT, () => {
  console.log('server listening on port 4500')
})
