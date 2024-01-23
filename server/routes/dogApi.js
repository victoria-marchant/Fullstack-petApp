const express = require('express')
const router = express.Router()
const request = require('superagent')

const dotenv = require('dotenv')
dotenv.config()

const dogApiKey = process.env.DOG_API_KEY

//GET /api/v1/dogapi
router.get('/breeds', (req, res) => {
  request
    .get('https://api.thedogapi.com/v1/breeds')
    .set('Authorization', 'x-api-key' + dogApiKey)
    .then((dog) => {
      res.json(JSON.parse(dog.text))
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
