const express = require('express')
const router = express.Router()

//------Add here functions to call for each route------//
const {
  addVeggieToDB,
  getAllDB,
  findProduct,
} = require('../controllers/veggie')

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
    //add a server status check function
    console.log('router working, api working')
    res.sendStatus(200)
  })

// use to query stuff
router
  .route('/database')
  .post(() => {})
  .get(async (req, res) => {
    console.log('hit vegetables/database')
    const query = await getAllDB()
    res.json(query).status(200)
  })

router.route('/database/search').get(async (req, res) => {
  console.log('hit /database/search')
  const query = await findProduct(req, res)
  res.json(query).status(200)
})

router.route('/').get((req, res) => {
  res.json('router working, api working').status(200)
})
module.exports = router
