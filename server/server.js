const express = require('express')
const path = require('path')
const server = express()

const puppies = require('./routes/puppies')
const dogBreeds = require('./routes/dogApi')
const catBreeds = require('./routes/catApi')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/dogapi', dogBreeds)
server.use('/api/v1/puppies', puppies)
server.use('/api/v1/catapi', catBreeds)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
