const mongoose = require('mongoose')
const VModel = require('../server/models/vegetablesModel')

const addVeggieToDB = async (clientForm) => {
  try {
    const newItem = await VModel.create(clientForm)
    return 'veggie added'
  } catch (error) {
    console.log(error)
  }
}

module.exports = addVeggieToDB

// const createTask = async (req, res) => {
//   const task = await Task.create(req.body)
//   res.status(201).json({ task })
// }
