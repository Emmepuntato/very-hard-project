const express = require('express')
const router = express.Router()
let maxDbItem = 0

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
    if (maxDbItem <= 1000) {
      const response = await addVeggieToDB(req.body)
      res.json(response).status(200)
    } else throw new Error('Database full. No more entries, sorry.')
  })
  .get((req, res) => {
    //add a server status check function

    res.sendStatus(200)
  })

// use to query stuff
router
  .route('/database')
  .post(() => {})
  .get(async (req, res) => {
    const query = await getAllDB()
    console.log(query)
    res.json(query).status(200)
  })

router.route('/database/search').get(async (req, res) => {
  const query = await findProduct(req, res)
  res.json(query).status(200)
})

router.route('/').get((req, res) => {
  res.json('router working, api working').status(200)
})
module.exports = router
