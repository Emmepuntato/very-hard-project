//imported mongoose model, within which we have various mongosh(?) method to query, add and modify
const { query } = require('express')
const VModel = require('../server/models/vegetablesModel')

// controller (=function) to add a vegetables to the database
const addVeggieToDB = async (clientForm) => {
  try {
    const newItem = await VModel.create(clientForm)
    return 'veggie added'
  } catch (error) {
    console.log(error)
  }
}

const getAllDB = async () => {
  console.log('first')
  try {
    const data = await VModel.find()
    return data
  } catch (err) {
    console.log(err)
  }
}

const findProduct = async (req, res) => {
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

    return data
  } catch (err) {
    console.log(err)
  }
}

module.exports = { addVeggieToDB, getAllDB, findProduct }
