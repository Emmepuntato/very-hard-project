const express = require('express')
const router = express.Router()

//------Add here functions to call for each route------//
const addNewUser = require('../controllers/login')
//-----------------------------------------------------//

router.route('/').post(async (req, res) => {
  const response = await addNewUser(req.body, res)
})

module.exports = router
