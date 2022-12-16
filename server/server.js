const express = require('express')
const path = require('path')
const server = express()
// const request = require('superagent')

const puppies = require('./routes/puppies')
// const dogBreeds = require('./routes/dogApi')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// server.use('/api/v1/dogapi', dogBreeds)
server.use('/api/v1/puppies', puppies)

// server.get('/breeds', (req, res) => {
//   request
//     .get('https://api.thedogapi.com/v1/breeds')
//     .set('Authorization', 'x-api-key' + apiKey)
//     .then((breed) => {
//       // console.log(breed)
//       res.json(breed)
//     })
//     .catch((err) => {
//       res.status(500).send(err.message)
//     })
// })

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
