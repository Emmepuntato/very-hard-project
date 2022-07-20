const { StatusCodes } = require('http-status-codes')
const fs = require('fs')
const data = require('../server-data/employee.js')

const fetchData = async (req, res) => {
  res.status(StatusCodes.OK).send(data)
}

module.exports = fetchData
