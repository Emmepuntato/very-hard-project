const express = require('express')
const router = express.Router()

//------Add here functions to call for each route------//
const addVeggieToDB = require('../controllers/veggie')
//-----------------------------------------------------//

// use to add element
router
  .route('/add')
  .post(async (req, res) => {
    console.log('hello from server')
    console.log(req.body)
    const response = await addVeggieToDB(req.body)
    res.json(response).status(200)
  })
  .get((req, res) => {
    console.log('router working, api working')
    res.sendStatus(200)
  })

// use to query stuff
router
  .route('/database')
  .post(() => {})
  .get((req, res) => {
    console.log('router working, api working')
    res.sendStatus(200)
  })

router.route('/').get((req, res) => {
  console.log('router working, api working')
  res.sendStatus(200)
})
module.exports = router
