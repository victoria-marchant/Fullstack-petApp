const express = require('express')
const router = express.Router()
const request = require('superagent')

const dotenv = require('dotenv')
dotenv.config()

const catApiKey = process.env.CAT_API_KEY

//GET /api/v1/catapi
router.get('/breeds', (req, res) => {
  request
    .get('https://api.thecatapi.com/v1/breeds')
    .set('Authorization', 'x-api-key' + catApiKey)
    .then((cat) => {
      res.json(JSON.parse(cat.text))
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
