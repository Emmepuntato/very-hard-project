const { StatusCodes } = require('http-status-codes')
const fs = require('fs')
const data = require('../server-data/employee.js')

const fetchData = async (req, res) => {
  res.status(StatusCodes.OK).json(data)
}

module.exports = fetchData
