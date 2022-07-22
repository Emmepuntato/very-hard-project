const express = require('express')
const router = express.Router()

//------Add here functions to call for each route------//
const fetchData = require('../controllers/employees')
//-----------------------------------------------------//

router
  .route('/about')
  .post(() => {})
  .get(fetchData)

router.route('/').get((req, res) => {
  console.log('router working, api working')
  res.sendStatus(200)
})
module.exports = router
