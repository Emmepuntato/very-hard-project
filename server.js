const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 4500

app.use(cors())

app.get('/api', ({ req, res }) => {
  res.json('hi emme, from front-end \n yes, its me')
})

app.listen(PORT, () => {
  console.log('server listening on port 4500')
})
