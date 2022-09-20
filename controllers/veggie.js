//imported mongoose model, within which we have various mongosh(?) method to query, add and modify
const { query } = require('express')
const VModel = require('../server/models/vegetablesModel')

// controller (=function) to add a vegetables to the database
const addVeggieToDB = async (clientForm) => {
  try {
    const newItem = await VModel.create(clientForm)
    //insert a function to write this new insertion in a log file
    return 'veggie added'
  } catch (error) {
    console.log(error)
    //write the error log file
  }
}

const getAllDB = async () => {
  try {
    const data = await VModel.find()
    return data
  } catch (err) {
    console.log(err)
  }
}
//fix this funk!!!
const findProduct = async (req, res) => {
  console.log('query: ', req.query)
  const { id, name, unit, company } = req.query
  const queryList = {}
  if (id) {
    queryList.vId = id
  }
  if (name) {
    queryList.vName = name
  }
  if (unit) {
    queryList.vUnit = unit
  }
  if (company) {
    queryList.companyName = company
  }
  try {
    const data = await VModel.find(queryList)
    console.log('search', queryList, data.length, ' results.')
    return data
  } catch (err) {
    console.log(err)
  }
}

module.exports = { addVeggieToDB, getAllDB, findProduct }

// const createTask = async (req, res) => {
//   const task = await Task.create(req.body)
//   res.status(201).json({ task })
// }
